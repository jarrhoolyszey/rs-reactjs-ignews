import Stripe from 'stripe';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxy = process.env.http_proxy;

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version: process.env.npm_package_version,
  },
  httpAgent: proxy ? new HttpsProxyAgent(process.env.http_proxy) : undefined,
  timeout: 10000,
});
