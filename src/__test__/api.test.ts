import APIClient from 'api/apiClient'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// 需要使用 service worker 的环境变量
const apiUrl = process.env.REACT_APP_API_URL

const apiClient = new APIClient(apiUrl)
const server = setupServer()

// jest是对react最友好的一个测试库
//beforeAl代表执行所有的测试之前,先来执行一下回调函数
beforeAll(() => server.listen())

//每一个测试跑完以后,都重置mock路由
afterEach(() => server.resetHandlers())

//所有的测试跑完后,关闭mock路由
afterAll(() => server.close())

test('http 方法发送异步请求', async () => {
  const endpoint = 'test-endpoint'
  const mockResult = { mockValue: 'mock' }

  server.use(rest.get(`${apiUrl}/${endpoint}`, (req, res, ctx) => res(ctx.json(mockResult))))

  const result = await apiClient.get(endpoint)
  expect(result).toEqual(mockResult)
})

test('http请求时会在 header 里带上 token', async () => {
  const token = 'FAKE_TOKEN'
  const endpoint = 'test-endpoint'
  const mockResult = { mockValue: 'mock' }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let request: any

  server.use(
    rest.get(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      request = req
      return res(ctx.json(mockResult))
    })
  )

  apiClient.setAuthorization(token)
  await apiClient.get(endpoint)

  expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`)
})
