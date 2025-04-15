import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
// import router from './router/index.jsx'
import { Provider } from 'react-redux'
// import store from './store/index.js'
import './index.css'
import 'antd/dist/reset.css'

import zhTW from 'antd/locale/zh_TW'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'

dayjs.locale('zh-tw')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* <RouterProvider router={router} /> */}
    <ConfigProvider
      locale={zhTW}
      theme={{
        token: {
          // 自定義主題設定
          // colorPrimary: '#00b96b',
        },
      }}
    >
      <App />
    </ConfigProvider>

    {/* </Provider> */}
  </StrictMode>,
)
