import logoFooter from 'static/img/vpbank-footer.svg'
import secure from 'static/img/_benefit/secure.svg'
import family from 'static/img/_benefit/family.svg'
import family2 from 'static/img/_customer/family.svg'
import user from 'static/img/_customer/user.svg'
import silver from 'static/img/_package/silver.svg'
import gold from 'static/img/_package/gold.svg'
import diamond from 'static/img/_package/diamond.svg'
import user1 from 'static/img/_customer/user1.svg'
import user2 from 'static/img/_customer/user2.svg'
import user3 from 'static/img/_customer/user3.svg'
import heathyInsIcon from 'static/img/_intro/heathyIns.svg'
import houseInsIcon from 'static/img/_intro/houseIns.svg'
import carInsIcon from 'static/img/_intro/carIns.svg'
import travelInsIcon from 'static/img/_intro/visitIns.svg'
import ptiLogo from 'static/img/_intro/pti-logo.svg'

export const footer = {
  address: [
    {
      content: logoFooter,
      url: '/',
      isImg: true,
    },
    {
      content: 'Ngân hàng TMCP Việt Nam Thịnh Vượng',
      url: '/',
    },
    {
      content: 'Trụ sở chính: 89 Láng Hạ, Quận Đống Đa, Hà Nội',
      url: '/',
    },
    {
      content: 'Hotline: 1900 54 54 75',
      url: '/',
    },
    {
      content: 'Email: customercare@vpbank.com.vn',
      url: '/',
    },
  ],
  products: [
    {
      content: 'Sản phẩm',
      url: '/',
    },
    {
      content: 'Bảo hiểm sức khỏe',
      url: '/',
    },
    {
      content: 'Bảo hiểm nhà',
      url: '/',
    },
    {
      content: 'Bảo hiểm xe cơ giới',
      url: '/',
    },
    {
      content: 'Bảo hiểm du lịch',
      url: '/',
    },
  ],
  information: [
    {
      content: 'Tra cứu thông tin',
      url: '/',
    },
    {
      content: 'Tra cứu GCN & Bồi thường',
      url: '/',
    },
    {
      content: 'Tra cứu hóa đơn điện tử',
      url: '/',
    },
    {
      content: 'Tra cứu lịch sử bồi thường',
      url: '/',
    },
  ],
}

export const benefit = {
  title:
    'Lợi ích của Người được bảo hiểm khi tham gia sản phẩm Bảo hiểm Bệnh hiểm nghèo',
  contents: [
    {
      image: secure,
      content:
        'Bảo vệ trước các bệnh các bệnh hiểm nghèo ngay từ giai đoạn đầu.',
    },
    {
      image: secure,
      content: 'Đảm bảo kế hoạch tài chính cho bản thân và gia đình.',
    },
  ],
  isRightContent: false,
  image: family,
}

export const customerPotential = {
  title: 'Đối tượng bảo hiểm',
  contents: [
    {
      image: user,
      content:
        'Công dân Việt Nam hoặc người nước ngoài đang cư trú trong\n' +
        '                    lãnh thổ Việt Nam không quá độ tuổi quy định và không bị\n' +
        '                    bệnh ung thư, bệnh hiểm nghèo theo định nghĩa (tại thời điểm\n' +
        '                    tham gia bảo hiểm), tâm thần hoặc bị thương tật vĩnh viễn từ\n' +
        '                    80% trở lên.',
    },
    {
      image: user,
      content:
        'Độ tuổi quy định: Từ đủ 01 tuổi đến 60 tuổi. Mở rộng độ tuổi\n' +
        '                    đến 65 tuổi nếu tham gia liên tục từ năm 60 tuổi.',
    },
  ],
  isRightContent: true,
  image: family2,
}

export const insurancePackage = {
  contents: [
    {
      image: silver,
      name: 'Gói Bạc',
      moneyTotal: '110.000.000',
      moneyMonth: '220.000',
      id: 4,
    },
    {
      image: gold,
      name: 'Gói Vàng',
      moneyTotal: '220.000.000',
      moneyMonth: '330.000',
      id: 5,
    },
    {
      image: diamond,
      name: 'Gói Kim Cương',
      moneyTotal: '330.000.000',
      moneyMonth: '483.000',
      id: 6,
    },
  ],
}

export const customerComment = {
  contents: [
    {
      avatar: user1,
      userName: 'Lê Vinh Quang',
      job: 'Kỹ sư công nghệ thông tin',
      comment:
        'Tôi rất bất ngờ vì quy trình mua bảo hiểm online rất nhanh chóng và dễ dàng, không cần phải gặp trực tiếp nhân viên bán hàng, tuân thủ đúng quy định giãn cách xã hội khi dịch Covid-19 bùng phát.',
    },
    {
      avatar: user2,
      userName: 'Nguyễn Ngọc Thu Hương',
      job: 'Nhân viên văn phòng',
      comment:
        'Bảo hiểm Bệnh hiểm nghèo như bùa hộ mệnh của gia đình tôi. Có bảo hiểm, tôi rất yên tâm chăm sóc gia đình mình.',
    },
    {
      avatar: user3,
      userName: 'Trần Hoài Linh',
      job: 'Kế toán',
      comment:
        'Con trai tôi rất vui mỗi khi bị ốm được mẹ đưa vào bệnh viện Hồng Ngọc khám mà không phải trả tiền. Cám ơn công ty bảo hiểm rất nhiều vì đã đem lại niềm vui và sự an tâm cho gia đình nhỏ của tôi.',
    },
  ],
}

export const introduction = [
  {
    name: 'PTI',
    img: heathyInsIcon,
    title: 'Bảo hiểm Bệnh hiểm nghèo',
    logo: ptiLogo,
    subTitle:
      'Nhận ngay 100% số tiền bảo hiểm khi không may mắc bệnh hiểm nghèo',
    description: 'Danh sách các bệnh hiểm nghèo được bảo hiểm',
    contents: [
      'Ung thư',
      'Cấy ghép nội tạng',
      'Tăng huyết áp động mạch phổi',
      'Đột quỵ',
      'U não lành tính',
      'Thay thế van tim',
      'Suy thận',
      'Phẫu thuật thông động mạch vành',
      'Bệnh Parkinson',
      'Liệt vĩnh viễn các chi',
      'Đa xơ cứng',
      'Bệnh gan giai đoạn cuối',
      'Nhồi máu cơ tim lần đầu',
      'Phẫu thuật ghép động mạch chủ',
    ],
    activeSlide: 0,
  },
  {
    name: 'HOUSE',
    img: houseInsIcon,
    title: 'Bảo hiểm Bệnh hiểm nghèo',
    logo: ptiLogo,
    subTitle:
      'Nhận ngay 100% số tiền bảo hiểm khi không may mắc bệnh hiểm nghèo',
    description: 'Danh sách các bệnh hiểm nghèo được bảo hiểm',
    contents: [
      'Ung thư',
      'Cấy ghép nội tạng',
      'Tăng huyết áp động mạch phổi',
      'Đột quỵ',
      'U não lành tính',
      'Thay thế van tim',
      'Suy thận',
      'Phẫu thuật thông động mạch vành',
      'Bệnh Parkinson',
      'Liệt vĩnh viễn các chi',
      'Đa xơ cứng',
      'Bệnh gan giai đoạn cuối',
      'Nhồi máu cơ tim lần đầu',
      'Phẫu thuật ghép động mạch chủ',
    ],
    activeSlide: 1,
  },
  {
    name: 'CAR',
    img: carInsIcon,
    title: 'Bảo hiểm Bệnh hiểm nghèo',
    logo: ptiLogo,
    subTitle:
      'Nhận ngay 100% số tiền bảo hiểm khi không may mắc bệnh hiểm nghèo',
    description: 'Danh sách các bệnh hiểm nghèo được bảo hiểm',
    contents: [
      'Ung thư',
      'Cấy ghép nội tạng',
      'Tăng huyết áp động mạch phổi',
      'Đột quỵ',
      'U não lành tính',
      'Thay thế van tim',
      'Suy thận',
      'Phẫu thuật thông động mạch vành',
      'Bệnh Parkinson',
      'Liệt vĩnh viễn các chi',
      'Đa xơ cứng',
      'Bệnh gan giai đoạn cuối',
      'Nhồi máu cơ tim lần đầu',
      'Phẫu thuật ghép động mạch chủ',
    ],
    activeSlide: 2,
  },
  {
    name: 'TRAVEL',
    img: travelInsIcon,
    title: 'Bảo hiểm Bệnh hiểm nghèo',
    logo: ptiLogo,
    subTitle:
      'Nhận ngay 100% số tiền bảo hiểm khi không may mắc bệnh hiểm nghèo',
    description: 'Danh sách các bệnh hiểm nghèo được bảo hiểm',
    contents: [
      'Ung thư',
      'Cấy ghép nội tạng',
      'Tăng huyết áp động mạch phổi',
      'Đột quỵ',
      'U não lành tính',
      'Thay thế van tim',
      'Suy thận',
      'Phẫu thuật thông động mạch vành',
      'Bệnh Parkinson',
      'Liệt vĩnh viễn các chi',
      'Đa xơ cứng',
      'Bệnh gan giai đoạn cuối',
      'Nhồi máu cơ tim lần đầu',
      'Phẫu thuật ghép động mạch chủ',
    ],
    activeSlide: 3,
  },
]
