import { Navigate, Route, Routes } from "react-router";
import IndexPage from "./page/index-page";
import TodayWodPage from "./page/today-wod-page";
import ProfilePage from "./page/profile-page";
import NoticePage from "./page/notice-page";
import SignInPage from "./page/sign-in-page";
import SignUpPage from "./page/sign-up-page";
import GlobalLayout from "./components/layout/global-layout";
import RecordPage from "./page/record-page";
import AuthLayout from "./components/layout/auth-layout";
import MemberLayout from "./components/layout/member-layout";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={`/`} />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>

      <Route element={<MemberLayout />}>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/wod" element={<TodayWodPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
