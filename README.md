# Dự án TikTok F8

### Bài 1: Giới thiệu dự án tiktok

### Bài 2: Tạo dự án và đẩy lên github

-   Tạo biến môi trường env để chạy một port khác
-   Trong khóa này có hỗ trợ push code lên github với giao thức ssh

### Bài 3: Cài đặt customize-cra

-   Thư viện này giúp ghi đè cấu hình của webpack
-   Lên github của thằng này và đọc về nó
-   Nếu muốn lưu các thư viện vào trong DevDependence thì chỉ cần thêm hậu tố -D hoặc sử dụng --save-dev
-   Check phiên bản webpack: Vào trong file package.lock.json và search theo từ khóa

### Bài 4: Cài đặt babel-plugin-module-resolver

-   Giúp import đường dẫn gọn gàng hơn, tránh dấu tương tự như: `./../`
-   Trong bài này mình sẽ học được 2 thứ:
    -   Cấu hình customize-cra
    -   Cấu hình babel-plugin-module-resolver (Đọc docs của nó nha)
-   Lưu ý: Khi cấu hình file JSON thì không được comment vào nó nha
-   Cái file `config-overrides.js` bản chất trong đó có cái overrides chính là babel </br>
    được ẩn trong create react app, nó sẽ lấy cái đó và return ra => create react app sẽ </br>
    đọc được file `babelrc`

### Bài 5: Cài đặt và cấu hình Prettier (Google có)

### Bài 6: Cấu hình sử dụng CSS/SASS

-   Cài thư viện sass ở --dev: `npm install sass --save-dev` hoặc `npm install sass -D`
-   Sau đó nhớ start lại app nhá
-   Sử dụng thư viện để reset css(Thư viện normalize.css npm)
    -   Cú pháp cài đặt trong npm: `npm install --save normalize.css`
-   Set default Css cho nó: font-size, line-height, font family

### Bài 7: Cấu hình Router/Layout cho dự án

1. Phân tích tổng quan layout

-   Nếu không làm trên bản thiết kế thì có thể thay đổi qua các trang của web, và xem bố cục nó có khác nhau hay không
-

2. Cài đặt react-router-dom: `npm i react-router-dom`
3. Đưa cấu hình routes ra ngoài
4. Xây dựng cơ chế tải Layout

-   publicRoutes: Không cần đăng nhập vẫn xem được
-   privateRoutes: Phải đăng nhập mới xem được
-   Khi xây dựng cơ chế tải Layout thì ta sẽ tìm những phần mà khi di chuyển TAB, những thành phần đó tĩnh(Không đổi) để tạo Layout
-   Nếu trong trường hợp cần nested routing thì cần làm như sau:

```js
import React from "react";
import { Routes, Route } from "react-router-dom";
const publicRoutes = [
    {
        path: "/",
        index: true,
        element: <Home />,
        children: [
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/following",
        element: <Following />,
    },
];

const App = () => {
    return (
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route key={index} {...route}>
                    {route.children &&
                        route.map((children, indexChildren) => (
                            <Route key={indexChildren} {...children} />
                        ))}
                </Route>
            ))}
        </Routes>
    );
};

export default App;
```

### Tips

-   Muốn Wrap một nội dung nào đó nhanh thì sử dụng `Ctr + Shift + P` sau đó gõ component Wrap
-   Hoặc sử dụng htmlagwrap extention
