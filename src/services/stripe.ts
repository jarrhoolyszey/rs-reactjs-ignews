import Stripe from 'stripe';
import { HttpsProxyAgent } from 'https-proxy-agent';

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version: process.env.npm_package_version,
  },
  timeout: 10000,
  httpAgent: new HttpsProxyAgent(process.env.http_proxy),
});