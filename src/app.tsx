import {BarsOutlined, ExportOutlined, FileTextOutlined, GithubOutlined, WechatOutlined} from '@ant-design/icons';
import Footer from '@/components/Footer';
import { Question, SelectLang } from '@/components/RightContent';
import { LinkOutlined } from '@ant-design/icons';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import LightColor from "@/components/Icon/LightColor";
import {FloatButton, message} from 'antd';
import wechat from '../public/assets/WeChat.jpg';


import React from 'react';
import { AvatarDropdown } from './components/RightContent/AvatarDropdown';
import {requestConfig} from "@/requestConfig";
import Settings from "../config/defaultSettings";
import {getLoginUserUsingGET} from "@/services/hmapi-backend/userController";
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const state: InitialState = {
  loginUser: undefined,
  settings: Settings,
  open: false
}
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<InitialState> {
  // 当页面首次加载时，获取要全局保存的数据，比如用户登录信息
  if (window.location.pathname === loginPath ) {
    return state;
  }
  try {
    const res = await getLoginUserUsingGET();

    if (res.data && res.code === 0) {
      state.loginUser = res.data;
    }
  } catch (error) {
    // history.push(loginPath);
  }
  return state;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.loginUser?.userAvatar ?? "https://img.qimuu.icu/typory/notLogin.png",
      title: initialState?.loginUser?.userAccount ?? "游客",
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.loginUser?.userName,
    },
    footerRender: () =>
      <>
      <Footer />
        <FloatButton.Group
          trigger="hover"
          style={{right: 94}}
          icon={<BarsOutlined/>}
        >
          <FloatButton
            tooltip={<img src={wechat} alt="微信 code_nav" width="120"/>}
            icon={<WechatOutlined/>}
          />
          <FloatButton
            tooltip={"📘 接口在线文档"}
            icon={<FileTextOutlined/>}
            onClick={() => {
              location.href = "https://doc.qimuu.icu/"
            }
            }
          />
          {/*<FloatButton*/}
          {/*  tooltip={"分享此网站"}*/}
          {/*  icon={<ExportOutlined/>}*/}
          {/*  onClick={() => {*/}
          {/*    if (!initialState?.loginUser && location.pathname !== loginPath) {*/}
          {/*      message.error("请先登录")*/}
          {/*      history.push(loginPath);*/}
          {/*      return*/}
          {/*    }*/}
          {/*    setInitialState({loginUser: initialState?.loginUser, settings: Settings, open: true})*/}
          {/*  }*/}
          {/*  }/>*/}
          <FloatButton
            tooltip={"切换主题"}
            icon={<LightColor/>}
            onClick={() => {
              if (initialState?.settings.navTheme === "light") {
                setInitialState({loginUser: initialState?.loginUser, settings: {...Settings, navTheme: "realDark"}})
              } else {
                setInitialState({loginUser: initialState?.loginUser, settings: {...Settings, navTheme: "light"}})
              }
            }
            }
          />
        </FloatButton.Group>
      </>,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login

      // 对一些界面进行是否登录进行判断
      // if (!initialState?.loginUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              setInitialState((preInitialState) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = requestConfig;
