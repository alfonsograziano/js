import { KeyObject } from 'crypto';

import { SignJWT, generateKeyPair } from 'jose';
import nock from 'nock';
import { StructError } from 'superstruct';

import { decodeToken, createJWKS, verifyIdToken } from './id-token';

describe('verifyIdToken', () => {
  test('valid idToken', async () => {
    const { privateKey, publicKey } = await generateKeyPair('RS256');

    if (!(publicKey instanceof KeyObject)) {
      throw new TypeError('key is not instanceof KeyObject, check envirionment');
    }

    const key = publicKey.export({ format: 'jwk' });
    nock('https://logto.dev', { allowUnmocked: true })
      .get('/oidc/jwks')
      .reply(200, { keys: [key] });
    const idToken = await new SignJWT({})
      .setProtectedHeader({ alg: 'RS256' })
      .setAudience('foo')
      .setSubject('foz')
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(privateKey);
    const JWKS = createJWKS('https://logto.dev/oidc/jwks');

    await expect(verifyIdToken(JWKS, idToken, 'foo')).resolves.not.toThrow();
  });

  test('signature mismatch', async () => {
    const { privateKey } = await generateKeyPair('RS256');
    const { publicKey } = await generateKeyPair('RS256');

    if (!(publicKey instanceof KeyObject)) {
      throw new TypeError('key is not instanceof KeyObject, check envirionment');
    }

    const key = publicKey.export({ format: 'jwk' });
    nock('https://logto.dev', { allowUnmocked: true })
      .get('/oidc/jwks')
      .reply(200, { keys: [key] });
    const idToken = await new SignJWT({})
      .setProtectedHeader({ alg: 'RS256' })
      .setAudience('foo')
      .setSubject('foz')
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(privateKey);
    const JWKS = createJWKS('https://logto.dev/oidc/jwks');

    await expect(verifyIdToken(JWKS, idToken, 'foo')).rejects.toThrowError(
      'signature verification failed'
    );
  });

  test('audience mismatch', async () => {
    const { privateKey, publicKey } = await generateKeyPair('RS256');

    if (!(publicKey instanceof KeyObject)) {
      throw new TypeError('key is not instanceof KeyObject, check envirionment');
    }

    const key = publicKey.export({ format: 'jwk' });
    nock('https://logto.dev', { allowUnmocked: true })
      .get('/oidc/jwks')
      .reply(200, { keys: [key] });
    const idToken = await new SignJWT({})
      .setProtectedHeader({ alg: 'RS256' })
      .setAudience('foo1')
      .setSubject('foz')
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(privateKey);
    const JWKS = createJWKS('https://logto.dev/oidc/jwks');

    await expect(verifyIdToken(JWKS, idToken, 'foo')).rejects.toThrowError(
      'unexpected "aud" claim value'
    );
  });

  test('expired', async () => {
    const { privateKey, publicKey } = await generateKeyPair('RS256');

    if (!(publicKey instanceof KeyObject)) {
      throw new TypeError('key is not instanceof KeyObject, check envirionment');
    }

    const key = publicKey.export({ format: 'jwk' });
    nock('https://logto.dev', { allowUnmocked: true })
      .get('/oidc/jwks')
      .reply(200, { keys: [key] });
    const idToken = await new SignJWT({})
      .setProtectedHeader({ alg: 'RS256' })
      .setAudience('foo')
      .setSubject('foz')
      .setIssuedAt()
      .setExpirationTime(0)
      .sign(privateKey);
    const JWKS = createJWKS('https://logto.dev/oidc/jwks');

    await expect(verifyIdToken(JWKS, idToken, 'foo')).rejects.toThrowError(
      '"exp" claim timestamp check failed'
    );
  });
});

describe('decodeToken', () => {
  test('decode token and get claims', async () => {
    const JWT = await new SignJWT({})
      .setProtectedHeader({ alg: 'RS256' })
      .setAudience('foo')
      .setSubject('foz')
      .setIssuer('logto')
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign((await generateKeyPair('RS256')).privateKey);
    const payload = decodeToken(JWT);
    expect(payload.sub).toEqual('foz');
  });

  test('throw on invalid JWT string', async () => {
    expect(() => decodeToken('invalid-JWT')).toThrow();
  });

  test('throw ZodError when iss is missing', async () => {
    const JWT = await new SignJWT({})
      .setProtectedHeader({ alg: 'RS256' })
      .setAudience('foo')
      .setSubject('foz')
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign((await generateKeyPair('RS256')).privateKey);
    expect(() => decodeToken(JWT)).toThrowError(StructError);
  });
});