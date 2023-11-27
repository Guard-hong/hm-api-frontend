import {useModel} from '@umijs/max';
import {Card, message, theme, Typography} from 'antd';
import React from 'react';
import {Link} from "@@/exports";


const {Text, Title} = Typography;
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: any
  index: number;
  desc: any;
}> = ({title, index, desc}) => {
  const {useToken} = theme;
  const {token} = useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <br/>
    </div>
  );
};


const Welcome: React.FC = () => {
  const {token} = theme.useToken();
  const {initialState} = useModel('@@initialState');

  const undeveloped = ()=> {
    message.error("未开发,敬请期待")
    return ;
  }

  return (
    <>

      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            <Title level={3}> 欢迎使用 虹猫API 接口开放平台 🎉</Title>
          </div>
          <div
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '100%',
            }}
          >
            <Text strong>
              <Title level={4}>虹猫API 接口开放平台是一个为用户和开发者提供全面API接口调用服务的平台 🛠</Title>
              <Title level={5}>
                😀 作为用户您可以通过注册登录账户，获取接口调用权限，并根据自己的需求浏览和选择适合的接口。您可以在线进行接口调试，快速验证接口的功能和效果。
                <br/>
                💻 作为开发者 我们提供了
                <a href="https://github.com/Guard-hong/hm-api-sdk" rel="noreferrer"  target={"_blank"}>
                  客户端SDK
                </a>
                ，
                通过
                {/*<Link to="javascript:void(0);">*/}
                {/*  开发者凭证*/}
                {/*</Link>*/}
                <a href="/account/center">
                  开发者凭证
                </a>
                即可将轻松集成接口到您的项目中，实现更高效的开发和调用。
                <br/>
                🤝 您可以将自己的接口接入到 虹猫API 接口开放平台平台上，并发布给其他用户使用。
                您可以管理和各个接口，以便更好地分析和优化接口性能。
                <br/>
                👌 我们还提供了<a href={"javascript:void(0);"} rel="noreferrer"  onClick={undeveloped}>开发者在线文档</a>和技术支持，帮助您快速接入和发布接口。
                <br/>
                🏁 无论您是用户还是开发者，虹猫API 接口开放平台都致力于提供稳定、安全、高效的接口调用服务，帮助您实现更快速、便捷的开发和调用体验。
              </Title>
            </Text>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              title={<Title level={5}>多样化的接口选择</Title>}
              desc={<Text
                strong>平台上提供丰富多样的接口供您选择，涵盖了各个领域的功能和服务，满足不同需求。</Text>}
            />
            <InfoCard
              index={2}
              title={<Title level={5}>在线调试功能</Title>}
              desc={<Text
                strong>您可以在平台上进行接口在线调试，快速验证接口的功能和效果，节省了开发调试的时间和工作量。</Text>}
            />
            <InfoCard
              index={3}
              title={<Title level={5}>客户端SDK支持</Title>}
              desc={<Text
                strong>为了方便开发者集成接口到自己的代码中，平台提供了客户端SDK，使调用接口变得更加简单和便捷。
              </Text>}
            />
            <InfoCard
              index={4}
              title={<Title level={5}>开发者文档和技术支持</Title>}
              desc={<Text
                strong>平台提供了详细的开发者文档和技术支持，帮助开发者快速接入和发布接口，解决遇到的问题和困难。</Text>}
            />
            <InfoCard
              index={5}
              title={<Title level={5}>稳定和安全</Title>}
              desc={<Text
                strong>平台致力于提供稳定和安全的接口调用服务，采用了安全措施和技术手段，保障用户数据的安全性和隐私保护。</Text>}
            />
          </div>
        </div>
      </Card>

    </>
  );
};

export default Welcome;
