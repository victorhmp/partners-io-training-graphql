export async function analyticsMiddleware(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { analytics },
  } = ctx

  ctx.status = 200
  ctx.body = await analytics.liveProductViews('12324')
  ctx.set('cache-control', 'no-cache')

  await next()
}
