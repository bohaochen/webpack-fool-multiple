import React from "react";
import { Route } from "react-router-dom";
import { Toast } from "antd-mobile";
import copy from 'copy-to-clipboard';
import { GetWxConfig } from '../api/apiFn';
import API from '../../common/api/api';
import getUrlArgObject from '../../common/api/getUrlArgObject';
const getParams = getUrlArgObject();
const path = "regUser";

var headImg = API.imgPath + decodeURI(getParams.userPic);
var name = decodeURI(getParams.nickName);
var invitationCode = decodeURI(getParams.invitationCode);
var qrCodePic = API.imgPath + decodeURI(getParams.qrCodePic);

export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    isFc: false,
    data: [],
    imgHeight: 176,
  };

  hideFcFn = () => {
    this.setState({
      isFc: false,
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillMount() {
    var _this = this;
  }

  componentDidMount() {
    //转发到朋友圈
  }

  render() {
    return (
      <div className="invite-page">
      
        <div style={{fontSize:"24px",textAlign:"center",padding:"20px"}}>
        用户服务协议和隐私政策
        </div>

        <p style={{fontSize:"12px",textAlign:"left",margin:"0px",padding:"0px 16px"}}>
        吉米优选在此特别提醒用户仔细阅读本《吉米优选用户个人信息及隐私保护政策》中的各个条款，并选择接受或者不接受本《吉米优选用户个人信息及隐私保护政策》。<br/>如用户不同意本政策的任意内容，请不要注册或使用吉米优选服务。<br/>
1.用户信息的收集和使用<br/>
1.1. 本政策所称的个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户自然人个人身份的各种信息。<br/>单独的设备信息、搜索关键词信息等无法与特定个人直接建立联系的信息或数据，不属于个人信息。<br/>
1.2 您充分理解并同意，为实现网上购物、优化我们的产品与/服务及保障安全所必须的功能，您须授权吉米优选收集、使用您的如下信息：<br/>
1.2.1. 用户注册所需信息<br/>
您使用本人手机号码注册成为吉米优选用户时，我们将通过发送短信验证码的方式来验证您的身份是否有效。<br/>在注册成为吉米优选用户的过程中，若您提供以下额外信息补全个人资料，将有助于我们给您提供更优质更个性化的服务，上述额外信息包括您的头像、昵称、性别、常住地、生日、个性签名等。<br/>若您不提供这些额外信息，不会影响您网上购物的基本功能。<br/>
1.2.2. 展示商品与/服务所需信息<br/>
为向您提供更契合您需求的页面展示和搜索结果，我们会收集关于您使用的服务以及使用方式的信息并将这些信息进行关联，这些信息包括：<br/>
1) 设备信息：吉米优选可能会读取您访问吉米优选平台或使用吉米优选服务时所使用的设备信息，包括但不限于设备类型、设备型号、设备设置、设备识别码、操作系统和应用程序版本、语言设置、分辨率、软硬件特征信息等。<br/>
2) 日志信息：在您访问吉米优选平台或使用吉米优选服务时，系统可能会自动接收并记录的您的浏览器、计算机上的信息等（包括但不限于IP地址、浏览器类型、搜索记录、浏览记录、浏览习惯、使用的语言、访问日期和时间、电信运营商及记录您需求的网页记录等）。<br/>
3) 您理解并同意，单独的设备信息、日志信息是无法识别特定自然人身份的信息，不属于您的个人信息。<br/>若我们将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，我们会依据法律规定及本政策对该等信息进行保护。<br/>
1.2.3.	交易及售后所需信息<br/>
1) 订单信息当您在吉米优选下单购买商品/服务时，吉米优选系统会生成您购买该商品/服务的订单。<br/>您需在订单中至少填写您的收货人姓名（或名称）、收货地址及电话号码，该订单会同时载明订单号、您所购买的商品或服务信息、下单时间、成团时间、您实际支付的货款金额及您采用的支付方式等。<br/>您理解并同意，我们将使用您的订单信息来进行您的身份核验、确定交易、支付结算，为您查询订单，提供客服咨询与售后服务等；<br/>我们可能还会使用您的订单信息来判断您的交易是否存在异常以保护您的交易安全。<br/>
2)	支付信息在您下单后，您可通过吉米优选系统支持的第三方支付机构完成支付，支付功能本身并不收集您的个人信息，但我们需将您的订单号、交易金额等与您选择的支付机构共享以实现其确认您的支付指令并完成支付。<br/>
3)	客服与/售后服务所需信息我们的客服和售后功能会使用您的账户信息和订单信息。<br/>为保证您的账户安全，我们的客服会使用您的账户信息核验您的身份。<br/>当您需要使用客服或售后功能时，我们会查询您的订单信息。<br/>在与我们的客服人员沟通时，您可能还需要提供上述信息之外的其他信息，如当您要求变更配送地址、联系人或联系电话等。<br/>
4)	保障交易安全所需信息为确认交易状态及为您提供售后与争议解决服务，我们须通过您基于交易所确定的交易对象、第三方支付机构、物流公司等收集与交易进度相关的您的交易、支付、物流信息，或将您的交易信息共享给上述服务提供者。<br/>
1.2.4. 优化产品与/服务所需信息<br/>
我们可能会收集您的订单信息、浏览记录、浏览习惯等进行数据分析以描述用户特征，用来为您展示或推荐您感兴趣的商品或服务信息。<br/>除上述信息外，我们还可能为提供服务或改进服务质量的合理需要而收集您的其他信息，包括您与我们的客服联系时提供的信息，您参与问卷调查时向我们发送的信息等。<br/>我们可能会将来自某项服务的信息与来自其他服务的信息结合起来，以便为您提供服务、个性化内容和建议。<br/>对于从您的各种设备上收集到的信息，我们可能会将它们进行关联，以便我们能在这些设备上为您提供一致的服务。<br/>
1.2.5. 保障账户安全所需信息<br/>
为提高您使用吉米优选服务的安全性，更准确地预防钓鱼网站欺诈和保护账户安全，我们可能会通过了解您的订单信息、浏览记录、浏览习惯、常用软件信息、设备信息等来判断您账户的风险，并可能会记录一些我们认为有风险的链接（“URL”）。<br/>
1.3. 用户可选择是否授权收集、使用的信息<br/>
为向您提供更加优质、满意、个性化的服务，努力提升您的用户体验，我们可能会附加收集和使用您的信息。<br/>若您不提供这些信息，您依然可以获得吉米优选为您提供的服务，但您可能无法获得这些附加信息给您带来的用户体验。<br/>
1.3.1.	位置信息：我们可能会收集您的位置信息来判断您所处的地点，为您推荐您所在区域可以购买的商品或服务（我们仅收集您当时所处的地理位置，不会将您不同时段的位置信息进行联系、结合以判断您的行踪轨迹）。<br/>
1.4. 征得授权同意的例外<br/>
您充分知晓，根据相关法律法规之规定，以下情形中，我们收集、使用您的个人信息无须征得您的授权同意：<br/>
1.4.1. 与国家安全、国防安全有关的；<br/>
1.4.2. 与公共安全、公共卫生、重大公共利益有关的；<br/>
1.4.3. 与犯罪侦查、起诉、审判和判决执行等有关的；<br/>
1.4.4. 出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br/>
1.4.5. 所收集的个人信息是您自行向社会公众公开的；<br/>
1.4.6. 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；<br/>
1.4.7. 根据您的要求签订合同所必需的；<br/>
1.4.8. 用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务故障；<br/>
1.4.9. 为合法的新闻报道所必需的；<br/>
1.4.10. 学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；<br/>
1.4.11. 法律法规规定的其他情形。<br/>
1.5. 来自第三方的信息<br/>
您理解并同意，在您注册吉米优选账户和使用服务过程中，您授权吉米优选可向吉米优选的关联方、合作伙伴获取其所收集的相关信息。<br/>若您使用第三方账户登录吉米优选，我们可从第三方获取您授权共享的账户信息（头像、昵称等），并将您的第三方账户与您的吉米优选账户绑定，使您可以通过第三方账户直接登录并使用我们的服务。<br/>
1.6. 用户信息的授权使用<br/>
为向您提供满意优质的服务，您理解、同意并授权我们将您的信息用于下列用途：<br/>
1.6.1.  向您提供您使用的各项服务，并维护、改进这些服务；<br/>
1.6.2.  向您推荐您可能感兴趣的内容，包括但不限于向您发出产品、服务信息，或通过系统向您展示个性化的第三方推广信息，或在征得您同意的情况下与吉米优选的合作伙伴共享信息以便他们向您发送有关其产品和服务的信息。<br/>如您不希望接收上述信息，可通过退订功能退订；<br/>
1.6.3. 我们可能会使用您的个人信息以验证身份、预防、发现、调查欺诈、危害安全、非法或违反与我们或其关联方协议、政策或规则的行为，以保护您、其他吉米优选用户，或我们或其关联方的合法权益；<br/>
1.6.4. 我们可能会将来自某项服务的信息与来自其他服务所获得的信息结合起来，用于为您提供更加个性化的服务使用，例如为让您通过购物拥有更广泛的社交圈而使用、共享或披露您的信息；<br/>
1.6.5. 我们会对我们的服务使用情况进行统计，并可能会与公众或第三方分享这些统计信息，以展示我们的产品或服务的整体使用趋势。<br/>但这些统计信息不包含您的任何身份识别信息。<br/>
1.6.6. 邀请您参与有关我们产品、服务的调查；<br/>
1.6.7. 经您同意或授权的或法律法规允许的其他用途。<br/>
2. Cookie 及类似技术的使用<br/>
2.1. 您理解并同意，为使您获得更轻松的访问体验，您访问吉米优选平台或使用吉米优选服务时，我们可能会采用各种技术收集和存储相关信息，包括使用小型数据文件识别您的身份，以了解您的使用习惯，帮您省去重复输入注册信息的步骤，或者帮助判断您的账户安全。<br/>这些数据文件可能是Cookie、Flash Cookie，或您的浏览器或关联应用程序提供的其他本地存储（统称“Cookie”）。<br/>
2.2. 您理解并同意，我们的某些服务可能只有通过使用Cookie才可得到实现。<br/>如果您的浏览器或浏览器附加服务允许，您可以修改对Cookie的接受程度或者拒绝吉米优选的Cookie，但拒绝吉米优选的Cookie在某些情况下可能会影响您安全访问吉米优选平台和使用吉米优选服务。<br/>
2.3.	您理解并同意，您在访问吉米优选平台或使用吉米优选服务的过程中可能会存在一些电子图像，称为“单像素 GIF 文件”、“网络 beacon”或其他类似技术（统称“网络 beacon”），它可以帮助网站计算浏览网页的用户或访问某些cookie。<br/>我们可能会通过网络beacon收集您浏览网页活动信息，例如您访问的页面地址、您先前访问的援引页面的位址、您停留在页面的时间、您的浏览环境及显示设定等。<br/>
3.	用户信息的共享、转让和公开披露<br/>
3.1.	用户信息的共享	<br/>
3.1.1.	除以下情况外，我们不会将您的个人信息提供给吉米优选以外的任何个人、公司或组织共享：<br/>
1)	依据本政策或事先已获得您明确的同意或授权；<br/>
2)	根据适用的法律、法规、法律程序的要求、行政或司法的强制性要求所必须时；<br/>
3)	在法律、法规允许的范围内，为维护吉米优选及关联方或合作伙伴、您或其他吉米优选用户或社会公共利益、财产或安全免遭损害时；<br/>
4)	为实现我们的服务的核心功能或提供您需要的服务；<br/>
5)	应您的需求为您处理您与他人的纠纷或争议；<br/>
6)	根据与您签署的相关协议或其他法律文件的约定；<br/>
7)	基于学术研究而使用；<br/>
8)	基于符合法律、法规规定的社会公共利益而使用。<br/>"
3.1.2.	您充分理解并同意，我们可能会将您的个人信息与我们的关联方共享。<br/>但我们只会共享必要的个人信息，且受本政策中所声明目的的约束。<br/>
3.1.3. 您充分理解并同意，我们可能会向合作伙伴（如提供商品或技术、广告等服务的供应商、吉米优选商家、委托我们进行推广的合作伙伴、代表我们发出信息的通讯服务商、支付机构等）或其他第三方共享您的信息，以保障为您提供的服务顺利完成。<br/>但我们仅会出于合法、正当、必要、特定且明确的目的共享您的信息，并且仅共享提供服务所必要的个人信息。<br/>
3.1.4. 您充分理解并同意，我们在防止欺诈等违法活动、减少信用风险等情况下，可能与其他公司或组织交换用户个人信息，但并不包括违反本政策中所作的承诺而为获利目的出售、出租、共享或以其它任何方式披露的个人信息。<br/>
3.2.	用户信息的转让除以下情况外，我们不会将您的个人信息转让给任何个人、公司或组织：<br/>
3.2.1. 事先获得您明确的同意或授权；<br/>
3.2.2. 根据适用的法律、法规、法律程序的要求、行政或司法的强制性要求所必须时；<br/>
3.2.3. 根据与您签署的相关协议或其他法律文件的约定；<br/>
3.2.4. 涉及合作、联营、合并、收购、资产转让或其他类似交易时。<br/>
3.3. 用户信息的公开披露吉米优选非常重视保护您的个人信息，未经您同意，吉米优选不会将其披露给无关的第三方，更不会将其公之于众，但因下列原因而披露的除外：
3.3.1.	获得您明确同意或基于您的主动选择；<br/>
3.3.2.	根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式公开披露您的个人信息；<br/>
3.3.3.	其他依据法律规定或双方约定可以披露的情形。<br/>
3.3.4.	您理解并同意，根据法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。<br/>
4.	用户个人信息的保护<br/>
4.1.	我们会采取符合法律规定、合理可行的安全防护措施和制度保护您个人信息的安全，防止您的个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。<br/>
4.2.	我们会采取合理可行的措施以避免收集无关的个人信息。<br/>我们只会在达成本政策所述目的所需期限内保留您的个人信息，除非需要延长保留期或应法律法规的允许或要求。<br/>
4.3.	互联网并非绝对安全的环境，我们强烈建议您不要使用非吉米优选推荐的通信方式发送个人信息。<br/>您可以通过我们的服务建立联系和相互分享。<br/>当您通过我们的服务创建交流、交易或分享时，您可自主选择沟通、交易或分享的对象，作为能够看到您的交易内容、联络方式、交流信息或分享内容等相关信息的第三方。<br/>
4.4.	在使用吉米优选服务进行网上交易时，您不可避免地要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或联系地址。<br/>请您妥善保护自己的个人信息，仅在必要情形下向他人提供。<br/>如您发现自己的个人信息尤其是您的账户或密码发生泄露，请您立即联络吉米优选，以便我们根据您的申请采取相应措施。<br/>
4.5.	特别提醒您注意，您在使用我们服务时自愿共享甚至公开分享的信息，可能会涉及您或他人的个人信息甚至个人敏感信息，如您在评价时选择上传包含个人信息的图片。<br/>请您更加谨慎地考虑，是否在使用我们的服务时共享甚至公开分享相关信息。<br/>
4.6.	如上述，吉米优选将使用各种安全技术、程序和制度防止用户个人信息的丢失、不当使用、未经授权的阅览或披露。<br/>但您充分理解并同意：由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。<br/>
4.7.	在不幸发生个人信息安全事件后，我们将按照法律法规的要求向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。<br/>事件相关情况我们将以信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。<br/>同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。<br/>
5.	用户个人信息的保存、访问和管理<br/>
5.1.	用户个人信息的保存您的个人信息将全部被存储于中华人民共和国境内，但以下情形除外：<br/>
5.1.1. 法律法规另有明确规定；<br/>
5.1.2.	获得您的明确授权；<br/>
5.1.3.	您通过互联网进行跨境交易等个人主动行为；<br/>
5.1.4. 针对以上情形，我们会依据本政策及相关法律法规对您的个人信息提供保护。<br/>
5.2.  用户个人信息的访问您有权通过以下方式访问您的个人信息，但法律法规另有规定，或本政策、《吉米优选服务协议》另有约定除外。<br/>
5.2.1.	账户信息——若您希望访问或编辑您的账户中的个人基本资料等信息，您可登录账号通过“个人中心-我的资料”执行此类操作。<br/>
5.2.2.	搜索信息——您可登录账号通过“搜索”访问或清除您的搜索记录。<br/>
5.2.3.	浏览信息——您可登陆账号通过“个人中心-我的足迹”访问或清除您的浏览记录。<br/>
5.2.4.	订单信息：您可登录账号通过“个人中心-我的订单”访问或清除您的订单记录、拼单记录、交易记录等。<br/>
5.2.5.	若您无法通过上述路径访问该等信息，您可通过吉米优选客服与我们联系。<br/>对于您在使用我们的产品或服务过程中产生的其他个人信息，我们将根据第6.5条“响应您的上述请求”中的相关安排向您提供。<br/> 
5.3.	用户个人信息的更正、补充 当您发现您的个人信息有误或需要补充时，您可通过“6.2用户个人信息的访问”中列明的方式提出更正或补充申请。<br/> 
5.4.	用户个人信息的删除您可通过“6.2用户个人信息的访问”中列明的方式删除您的部分个人信息。<br/>
在以下情形中，您可向我们提出删除个人信息的请求：<br/>
1）我们处理个人信息的行为违反法律法规；<br/>
2）我们收集、使用您的个人信息，却未征得您的明确同意；<br/>
3）我们处理个人信息的行为严重违反了与您的约定；<br/>
4）您不再使用我们的产品或服务；<br/>
5）我们永久不再为您提供产品或服务。<br/>"
5.5.	响应您的上述请求为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。<br/>我们可能会先要求您验证自己的身份，然后再处理您的请求。<br/>对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情况收取一定成本费用。<br/>对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际的请求，我们可能会予以拒绝。<br/>
5.6.	您理解并同意，在以下情形中，按照法律法规的要求，我们将无法响应您的请求：<br/>
5.6.1.	与国家安全、国防安全有关的；<br/>
5.6.2.	与公共安全、公共卫生、重大公共利益有关的；<br/>
5.6.3.	与犯罪侦查、起诉、审判和执行判决等有关的；<br/>
5.6.4.	有充分证据表明个人信息主体存在主观恶意或滥用权利的；<br/>
5.6.5.	响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；<br/>
5.6.6.	 涉及商业秘密的。<br/>
6.	未成年人信息保护我们非常重视未成年人的个人信息保护，若您为18周岁以下的未成年人，请您及您的监护人仔细阅读本政策，并在征得您的监护人同意的前提下使用我们的服务或向我们提供信息。<br/>
7.	其他<br/>
7.1.	条款的独立性如果根据适用的法律认定本政策中的任何条款或者任何条款中的任何部分无效、违法或者不具有可执行性，这种无效、违法或者不具有可执行性不影响本政策中的任何其它条款或者这些条款中的任何其它部分的效力。<br/>
7.2.	联系我们您对本政策或您的个人信息相关事宜有任何问题、意见或建议，请联系吉米优选客服或通过个人中心“设置”中的“意见反馈”联系我们。<br/>
7.3.	生效日期本政策于2018年6月29日首次生效。<br/>


        </p>

        <div className="fc" style={{ display: this.state.isFc ? "block" : "none" }} onClick={this.hideFcFn}>
          <div className="text">
            <span>请点击右上角按钮，</span>
            <span>选择【在浏览器中打开】</span>
          </div>
          <img src={require("../assets/img/jt.png")} alt="" />
        </div>
      </div>
    );
  }
}
