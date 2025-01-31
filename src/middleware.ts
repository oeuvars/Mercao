import { authMiddleware } from '@clerk/nextjs'


export default authMiddleware({
  debug: false,
  publicRoutes: [
    '/',
    '/api/webhooks(.*)',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ],
  ignoredRoutes: [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
    '/privacy-policy',
    '/404'
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
