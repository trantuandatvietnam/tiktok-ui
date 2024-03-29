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
    -   Cấu hình babel-plugin-module-resolver (Đọc docs của nó nhé)
-   Lưu ý: Khi cấu hình file JSON thì không được comment vào nó nhé
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
-   Nếu trong trường hợp cần nested routing thì cần làm như sau: </br>
    (Lưu ý: hai cách dưới đây là của những bạn khác, có thể có sai sót)

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

-   Hoặc thử cách sau

```js
// App.js
<Routes>
    {publicRoutes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
        >
            <Route
                index
                element={<route.component />}
            />
                {route.children &&
                    route.children.length > 0 &&
                    route.children.map((child, index) => (
                        <Route
                            key={index}
                            path={child.path}
                            element={<child.component />}
                        />
                    ))}
            </Route>
        </ Route>
    }
</Routes>
// routes/index.js
export const publicRoutes = [
	{
		path: '/home',
		component: Home,
		children: [
			{
				path: 'profile',
				component: Profile,
			},
		],
	},
	{
		path: '/following',
		component: Following,
	},
];

```

### Dựng khung Layout mặc định

-   Trong dự án này chúng ta sẽ sử dụng CSS bind của thư viện classnames
-   Cú pháp cài đặt thư viện: `npm i classnames`

### Xây dựng UI phần Header(Phần 1)

-   Cài fontawesome
    -   Dán đoạn mã sau vào file package.json, sau khi dán xong cần chạy lệnh `npm i` để cài các package tương ứng

```json
"@fortawesome/fontawesome-svg-core": "^1.3.0",
"@fortawesome/free-brands-svg-icons": "^6.0.0",
"@fortawesome/free-regular-svg-icons": "^6.0.0",
"@fortawesome/free-solid-svg-icons": "^6.0.0",
"@fortawesome/react-fontawesome": "^0.1.17"
```

### Xây dựng UI phần Header(Phần 2)

-   Sử dụng thư viện tippyjs (Search tippyjs sau đó click vào phần react nhá) `npm i @tippyjs/react`
    -   Dùng làm tooltip hoặc sử dụng làm các dropdown

### Xây dựng UI phần Header(Phần 3)

-   Xấy dựng Component Button + Một component Button có thể là một thẻ a (Khi click sẽ đưa ra một link bên ngoài) </br>
    hoặc nó cũng có thể là thẻ Link của react-router-dom (Khi Click sẽ dẫn đến link nội bộ của trang web đó)

=> Cần xấy dựng sao cho component này linh hoạt trong mọi tình huống

-   Khi muốn một thẻ a hoặc Link khi nhấn vào sẽ mở đường dẫn trong một tab mới thì ta có thể </br>
    thêm cho nó thuộc tính target="\_blank"

### Xây dựng UI phần Header(Phần 4)

### Xây dựng UI phần Header(Phần 5)

### Xây dựng UI phần Header(Phần 6)

### Xây dựng Logic phần Header(Phần 1)

### Xây dựng Logic phần Header(Phần 2)

-   API search
    `https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less`
-   Cấu trúc cúa một URL:
    -   Giao thức
    -   Hostname
    -   path (/api...), đăng sau `?` là query parameter
-   Cái `type` trong đường dẫn trên là do bên backend cung cấp, (less chỉ nhận tối đa 5 kết quả trả về, more sẽ nhận tối đa 10 kết quả trả về).
-   Tại sao nên sử dụng debounce trong trường hợp này? Lý do là vì khi thay đổi, nhập dữ liệu liên tục vào ô input thì api sẽ call liên tục, vì thế có thể xảy ra tình trạng trả về sai kết quả tìm kiếm (bằng cách nào đó api cuối cùng được gọi lại chạy xong trước api đầu tiên => Gây ra lỗi)

### Tìm hiểu và sử dụng thư viện Axios

-   Thư viện giúp gọi API
-   Khi sử dụng các phương thức truyền params qua một object thì không phải sử dụng encodeURIComponent nữa
-   Sau này nếu làm dự án lớn thì có thể có nhiều baseURL thì lúc đó muốn sử dụng URL nào thì gửi sử dụng axios (instance) đó

### Tìm hiểu thư viện PropTypes

-   `instanceof` kiểm tra một giá trị có phải là thể hiện của một kiểu

### Khắc phục nhiều file index

### Xây dựng UI phần sidebar

### Tips

-   Phương pháp học một công nghệ mới:

*   Bước 1: Xem toturial trên mạng kèm đọc docs trên trang chủ của nó
*   Bước 2: Làm project ứng dụng
*   Bước 3: Tìm hiểu sâu (Nếu cần)

-   Muốn Wrap một nội dung nào đó nhanh thì sử dụng `Alt + W` sau đó gõ component Wrap (Càn cài extension htmltagwrap)
-   Hoặc sử dụng htmlagwrap extention
-   Khi một thao tác bị buộc phải lặp đi lặp lại nhiều lần thì mình nền tạo một cái template để sau coppy cho tiện
-   Khi coppy một thẻ svg mà không dùng được thì ta coppy cái id bên trong nó và search ở dev tools để lấy một cái khác
-   Bấm phím `Home` con trỏ chuột sẽ tự động chạy về đầu dòng, bấm `End` để con trỏ chuột chạy về cuối dòng
-   Quy tắc đặt thêm thuộc tính CSS (`(number)` độ ưu tiên)
    -   Các thuộc tính vị trí cho lên trên (1)
    -   Các thuộc tính kích thước (2)
    -   Các thuộc tính màu sắc: color > background (3)
    -   Các thuộc tính khác (4)
-   Giả sử khi CSS border cho một thẻ input(sao cho khi focus mới hiện) thì ta thấy rằng khi focus, lúc này border </br>
    xuất hiện nên giao diện nó bị hơi nhảy nhảy => Nên css mặc định là nó có border nhưng cho nó có màu transparent(Cái dưới chỉ cần set cho đổi border)

=> Lúc đó giao diện sẽ không bị nhảy nữa

-   Lưu ý: Khi CSS, những giá trị nào xuất hiện nhiều lần thì nên sử dụng biến cho nó
-   Khi viết SCSS thì nên viết hai cấp thôi, sau này còn dễ bảo trì
-   Giả sử muốn inspect (F12) một trang web và soi các thuộc tính HTML/CSS của nó nhưng cứ bị ẩn hiện

=> Sử dụng đoạn code sau để pause chế độ debuger (Làm một hành động nào đó, đợi số giây quy định nó sẽ tự debug (Giữ ở trạng thái cuối cùng))

```js
setTimeout(() => {
    debugger;
}, 3000);
```

-   Khi sử dụng border-radius (Muốn nó bo cong nhất có thể) theo đơn vị "%" thì box sẽ bị méo </br>
    (Trừ trường hợp chiều ngang bằng chiều cao) => Để xử lí tình huống này thì chỉ cần xét cho nó </br>
    theo đơn vị `px` (VD: 999px), như vậy là nó sẽ bo cong nhất có thể mà không bị méo

-   Khi sử dụng từ khóa `const` để khai báo một biến gì đó cố định (Không thay đổi) thì </br>
    người ta thường viết hoa biến đó lên
-   Nếu CSS ở component khác ăn vào CSS ở component này thì ta có thể thử bằng cách bao bọc nó bởi một thẻ nào đó, rồi CSS thêm thông qua thẻ đó

-   Xem tất cả thuộc tính của một khối thì bấm sang tab computer
-   Convert bất kì kiểu dữ liệu gì sang children: Thêm `!!` vào trước nó
-   Để lấy được `font` của một trang web thì ta bật F12 rôi vào tab network, </br>
    sau đó chọn vào font rồi F5 lại trang (Chuột phải vào font muốn tạo, sau đó `open new tab`)

-   Khi ta viết một logic nào đó có tính chất setState lại nhiều lần thì nên cân nhắc việc </br>
    tách nó ra thành một component riêng và xử lí logic bên trong nó để tránh re-render lại </br>
    những thành phần không cần thiết => Tối ưu hiệu năng

-   Giả sử có API sau: `https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValues}&type=less`
    Nếu người dùng nhập vào một kí tự như `% $ &` thì nó sẽ trùng với kí tự của API và gặp lỗi

=> Fix bằng cách sử dụng `encodeURIComponent(searchValues)` để mã hóa nó thành một kí tự hợp lệ trên URL

Vì vậy khi cố tình nhập `#` thì nó sẽ hiện như sau: `https://tiktok.fullstack.edu.vn/api/users/search?q=%26&type=less`

-   Lưu ý rằng nếu CSS cho một class cùng một thuộc tính thì nó sẽ bị ghi đè
-   Lưu ý hàm setState(value) thì giá trị value chỉ được sử dụng lần đầu khi component mount thôi nha (Nếu value được truyền vào từ một hàm khác)
-   Nên cố gắng không hashCode (VD từng tuyến đường thì nên tách ra file riêng)

-   Khi CSS chiều dài cho thẻ cha nhưng không css cho thẻ con thì thẻ cha chỉ cần sử dụng display: flex là thẻ con nó sẽ ăn theo

-   Nếu viết kiểu này: `export { default, default as DefaultLayout } from "./DefaultLayout";` </br>
    thì bên kia có thể `import DefaultLayout from "~/layouts";` hoặc `import {DefaultLayout} from "~/layouts";`

-   Quy tắc đặt file env

    -   Khi chỉ muốn một mình mình biêt: .env.local
    -   Khi muốn share chung giữa các thành viên code với nhau: .env.development
    -   Trên production: .env.production
    -   Đối với mỗi môi trường nó sẽ ưu tiên lấy cấu hình của file đó (Trong trường hợp nó có cả </br> `.env` và `.env.production` thì nó sẽ ưu tiên sử dụng môi trường cụ thể là production)

-   Giả sử trong trường hợp muốn một chức năng chỉ hiện trên môi trường nhất định thì ta có thể sử dụng biến env.NODE_ENV để kiểm tra (Thử log file process.env ra là thấy)

-   Sử dụng `Ctr + Alt + Mũi tên xuống` để tạo ra nhiều trỏ chuột theo hàng dọc
-   Nếu muốn một component chỉ được nhận một children thì thay vì `return children` luôn thì ta `return React.children.only(children)`

-   Những hàm trong một sự kiện `on...` thì được đặt tên bắt dầu bằng `handle`
-   Nguyên tắc tạo một component: Một component không nên thực hiện để render ra một component khác TƯƠNG TỰ (nhưng khác nhau về mặt ngữ nghĩa)
-   Thứ tự import trong một component nên như sau:

    -   Ưu tiên External (Những thư viện cài từ bên ngoài)
    -   Sau đó đến Internal (Nhưng file trong dự án)
    -   Trình bày cách nhau một dòng

-   SEO (Search Engine Optimization - Tối ưu hóa công cụ tìm kiếm)

    -   Google hay những công cụ tìm kiếm nó sẽ ưu tiên những thẻ h, trong đó nó sẽ ưu tiên thẻ h1 nhất sau đó thấp dần xuống h6

-   Lưu ý: Mã màu thập lục phân nếu có 8 chữ số thì 2 chữ số cuối cùng thể hiện độ opacity: VD: `color: #161823bf`

-   `line-height` khi không chỉ định rõ theo đơn vị thì nó là theo tỉ lệ (Lấy đơn vị line-height theo px chia cho font-size thì nó sẽ ra tỉ lệ)
