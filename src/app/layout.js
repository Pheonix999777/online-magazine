"use client";
import "./sass/global.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
