const pages = {
  home: document.getElementById('homePage'),
  org: document.getElementById('orgPage')
};
const backHomeBtn = document.getElementById('backHomeBtn');
const homeHotspots = document.getElementById('homeHotspots');
const orgHotspots = document.getElementById('orgHotspots');

const modal = document.getElementById('scrollModal');
const scrollCard = modal.querySelector('.scroll-card');
const messageView = document.getElementById('messageView');
const profileView = document.getElementById('profileView');
const memberView = document.getElementById('memberView');

const messageFields = {
  kicker: document.getElementById('messageKicker'),
  title: document.getElementById('messageTitle'),
  body: document.getElementById('messageBody')
};
const profileFields = {
  group: document.getElementById('profileGroup'),
  name: document.getElementById('profileName'),
  role: document.getElementById('profileRole'),
  position: document.getElementById('profilePosition'),
  academicRank: document.getElementById('profileAcademicRank'),
  degree: document.getElementById('profileDegree'),
  email: document.getElementById('profileEmail'),
  responsibility: document.getElementById('profileResponsibility'),
  avatar: document.getElementById('profileAvatar')
};
const memberFields = {
  group: document.getElementById('memberGroup'),
  title: document.getElementById('memberTitle'),
  tbody: document.getElementById('memberTableBody')
};

const MAZE_URL = 'https://fae-mta.github.io/Maze_Robot/';

const INTRO_TEXT = `Câu lạc bộ Cơ điện tử – Khoa Hàng không Vũ trụ là môi trường học tập, thực hành và sáng tạo dành cho học viên, sinh viên yêu thích Robotics, cơ khí, điện – điện tử, lập trình và điều khiển. CLB hướng tới xây dựng một cộng đồng kỹ thuật trẻ, nơi các thành viên được học từ cơ bản, tham gia dự án, thi đấu và từng bước phát triển thành lực lượng nòng cốt cho các sân chơi công nghệ cấp Học viện và Robocon.\n\nVới tinh thần “Cùng học – Cùng làm – Cùng sáng tạo – Cùng chinh phục”, CLB tạo cơ hội để mỗi thành viên rèn luyện kỹ năng, phát triển tư duy kỹ thuật, làm chủ công nghệ và lưu giữ kinh nghiệm cho các thế hệ tiếp theo.`;

const staffProfiles = {
  chairman: {
    group: 'Ban Chủ nhiệm',
    name: 'TS Nguyễn Ngọc Bình',
    role: 'Chủ nhiệm Câu lạc bộ',
    position: 'Chủ nhiệm CLB Cơ điện tử',
    academicRank: '—',
    degree: 'Tiến sĩ',
    email: 'binhnn@lqdtu.edu.vn',
    responsibility: 'Phụ trách chung các hoạt động của câu lạc bộ.'
  }
};

const memberGroups = {
  outerMembers: {
    group: 'Thành viên câu lạc bộ',
    title: 'Thành viên Tập sự',
    members: Array.from({ length: 8 }, (_, i) => ({ stt: i + 1, name: '', className: '' }))
  },
  innerMembers: {
    group: 'Thành viên câu lạc bộ',
    title: 'Thành viên Chính thức',
    members: Array.from({ length: 8 }, (_, i) => ({ stt: i + 1, name: '', className: '' }))
  },
  coreMembers: {
    group: 'Thành viên câu lạc bộ',
    title: 'Thành viên Nòng cốt',
    members: Array.from({ length: 8 }, (_, i) => ({ stt: i + 1, name: '', className: '' }))
  }
};

const homeSpots = [
  { id:'sonMon', label:'GIỚI THIỆU CLB', shape:'rect', x:47.8, y:75, w:25, h:30.0, action:'intro' },
  { id:'chinhDien', label:'CƠ CẤU TỔ CHỨC', shape:'rect', x:47.8, y:42, w:22, h:22, action:'goto-org' },
  {
    id:'truongLaoDuong', label:'BAN CHUYÊN MÔN', shape:'rect', x:17.1, y:44, w:18.5, h:14, action:'info',
    kicker:'Ban chuyên môn', title:'Trưởng Lão Đường',
    body:`Là khu vực đại diện cho ban chuyên môn của câu lạc bộ.\n\nTrưởng Lão Đường phụ trách định hướng học thuật, xây dựng nội dung đào tạo, hỗ trợ chuyên môn cho các dự án, đội thi và hoạt động nghiên cứu về cơ khí, điện – điện tử, lập trình và điều khiển.`
  },
  {
    id:'chapPhapDuong', label:'BAN ĐIỀU HÀNH', shape:'rect', x:67.8, y:43.5, w:13, h:12, action:'info',
    kicker:'Ban điều hành', title:'Chấp Pháp Đường',
    body:`Là khu vực đại diện cho ban điều hành của câu lạc bộ.\n\nChấp Pháp Đường phụ trách tổ chức hoạt động, điều phối kế hoạch, quản lý kỷ luật – nề nếp và bảo đảm việc triển khai các chương trình của câu lạc bộ được thông suốt, hiệu quả.`
  },
  {
    id:'thienCongVien', label:'THỰC HÀNH - CHẾ TẠO', shape:'rect', x:17.1, y:61, w:18.5, h:17, action:'info',
    kicker:'Nghiên cứu – chế tạo', title:'Thiên Công Viện',
    body:`Là không gian nghiên cứu, thiết kế và chế tạo của câu lạc bộ.\n\nThiên Công Viện là nơi các thành viên triển khai ý tưởng, thực hành chế tạo robot, hoàn thiện mô hình – cơ cấu, thử nghiệm giải pháp kỹ thuật và phát triển sản phẩm phục vụ học tập, dự án và thi đấu.`
  },
  {
    id:'lichLuyenThap', label:'CÁC KHÓA ĐÀO TẠO', shape:'rect', x:24, y:18, w:12, h:25, action:'info',
    kicker:'Đào tạo – rèn luyện', title:'Lịch Luyện Tháp',
    body:`Đây là khu vực biểu trưng cho quá trình đào tạo và rèn luyện thành viên.\n\nLịch Luyện Tháp tập trung vào xây dựng lộ trình học tập từ cơ bản đến nâng cao, tổ chức thực hành, bồi dưỡng kỹ năng và giúp thành viên từng bước làm chủ kiến thức, công nghệ và phương pháp làm việc nhóm.`
  },
  {
    id:'tangKinhThap', label:'TÀI LIỆU - CHƯƠNG TRÌNH', shape:'rect', x:10, y:18.1, w:12, h:25, action:'info',
    kicker:'Tài liệu – tri thức', title:'Tàng Kinh Tháp',
    body:`Là khu vực lưu trữ tài liệu, tri thức kỹ thuật và kinh nghiệm hoạt động của câu lạc bộ.\n\nTàng Kinh Tháp đóng vai trò như thư viện kỹ thuật, nơi tổng hợp giáo trình, tài liệu hướng dẫn, kinh nghiệm thi đấu, hồ sơ dự án và các nguồn học liệu cho thành viên tra cứu, kế thừa và phát triển.`
  },
  { id:'thiLuyenTruong', label:'CÁC CUỘC THI NỘI BỘ', shape:'rect', x:88, y:53, w:20, h:14, action:'maze' },
  { id:'mazeEvent', label:'Robot Mê Cung đang diễn ra', shape:'poster', x:83, y:54, w:6.1, h:10.9, action:'maze', image:'assets/maze-poster.webp' },
  {
    id:'xuatChinhDuong', label:'ĐỘI TUYỂN - THI ĐẤU', shape:'rect', x:88, y:33.2, w:20, h:15, action:'info',
    kicker:'Thi đấu – đội tuyển', title:'Xuất Chinh Đường',
    body:`Là khu vực đại diện cho các đội tuyển và hoạt động tham gia thi đấu của câu lạc bộ.\n\nXuất Chinh Đường là nơi quy tụ lực lượng nòng cốt, chuẩn bị đội hình, tổ chức huấn luyện và xuất quân tham gia các sân chơi công nghệ như Robocon và các cuộc thi kỹ thuật khác.`
  },
  {
    id:'anhHungBang', label:'THÀNH TÍCH TIÊU BIỂU', shape:'rect', x:79, y:75, w:10, h:10.0, action:'info',
    kicker:'Vinh danh thành tích', title:'Anh Hùng Bảng',
    body:`Là khu vực ghi nhận và tôn vinh những thành tích tiêu biểu của câu lạc bộ.\n\nAnh Hùng Bảng dùng để vinh danh tập thể, cá nhân có thành tích nổi bật trong học tập, nghiên cứu, chế tạo, thi đấu và đóng góp cho sự phát triển của câu lạc bộ.`
  },
  {
    id:'giangHoLenh', label:'THÔNG BÁO', shape:'rect', x:91, y:74.5, w:10, h:10.0, action:'info',
    kicker:'Thông báo – chỉ thị', title:'Giang Hồ Lệnh',
    body:`Là khu vực công bố thông báo, lịch hoạt động và các chỉ đạo điều hành của câu lạc bộ.\n\nGiang Hồ Lệnh giúp thành viên cập nhật nhanh các mốc thời gian, kế hoạch triển khai, yêu cầu nhiệm vụ và các thông tin quan trọng trong quá trình sinh hoạt và thi đấu.`
  }
];

const orgSpots = [
  { id:'chairman', label:'CHỦ NHIỆM', shape:'round', x:49.8, y:23, w:16, h:18, type:'profile', profileId:'chairman' },
  {
    id:'vice', label:'PHÓ CHỦ NHIỆM', shape:'round', x:48, y:43.5, w:16, h:18, type:'info',
    kicker:'Ban Chủ nhiệm', title:'Phó Chủ nhiệm',
    body:`Phó Chủ nhiệm hỗ trợ Chủ nhiệm trong công tác điều phối hoạt động của câu lạc bộ.\n\nVị trí này phụ trách kết nối giữa ban chuyên môn, ban điều hành và các nhóm thành viên; theo dõi tiến độ công việc; hỗ trợ triển khai kế hoạch và duy trì sự phối hợp chung.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'mechanics', label:'Cơ khí – Kết cấu', shape:'round', x:15.0, y:53.0, w:8, h:26, type:'info',
    kicker:'Ban chuyên môn', title:'Cơ khí – Kết cấu',
    body:`Phụ trách mảng thiết kế cơ khí, kết cấu và tích hợp phần cứng cơ khí cho robot, mô hình và thiết bị.\n\nNhóm này hướng dẫn thành viên về tư duy thiết kế, lựa chọn vật liệu, gia công, lắp ráp, tối ưu kết cấu và bảo đảm tính khả thi khi chế tạo.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'electronics', label:'Điện – Điện tử', shape:'round', x:24, y:53.0, w:8, h:26, type:'info',
    kicker:'Ban chuyên môn', title:'Điện – Điện tử',
    body:`Phụ trách thiết kế, tích hợp và kiểm tra các khối điện – điện tử trong robot và mô hình kỹ thuật.\n\nNhóm này hỗ trợ về mạch nguồn, điều khiển động cơ, cảm biến, kết nối phần cứng, an toàn điện và tối ưu hệ thống điện tử phục vụ học tập và thi đấu.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'control', label:'Lập trình – Điều khiển', shape:'round', x:33, y:53.0, w:8, h:26, type:'info',
    kicker:'Ban chuyên môn', title:'Lập trình – Điều khiển',
    body:`Phụ trách xây dựng thuật toán, lập trình và điều khiển hệ thống robot.\n\nNhóm này hướng dẫn thành viên về lập trình nhúng, xử lý tín hiệu cảm biến, điều khiển chuyển động, giao tiếp giữa các khối phần cứng và tối ưu hành vi tự động của robot.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'planning', label:'Kế hoạch – Hành chính', shape:'round', x:63, y:60, w:5, h:24, type:'info',
    kicker:'Ban điều hành', title:'Kế hoạch – Hành chính',
    body:`Phụ trách xây dựng kế hoạch công tác, tổng hợp đầu việc và bảo đảm công tác hành chính của câu lạc bộ.\n\nBộ phận này hỗ trợ lịch hoạt động, thông báo, hồ sơ và theo dõi việc triển khai các chương trình theo đúng tiến độ.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'training', label:'Đào tạo – Thành viên', shape:'round', x:69, y:60, w:5, h:24, type:'info',
    kicker:'Ban điều hành', title:'Đào tạo – Thành viên',
    body:`Phụ trách công tác đào tạo, quản lý thành viên và hỗ trợ phát triển năng lực trong câu lạc bộ.\n\nBộ phận này tổ chức các hoạt động hướng dẫn nhập môn, phân nhóm học tập, theo dõi quá trình rèn luyện và kết nối thành viên với các nhóm dự án.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'events', label:'Sự kiện – Thi đấu', shape:'round', x:75, y:60, w:5, h:24, type:'info',
    kicker:'Ban điều hành', title:'Sự kiện – Thi đấu',
    body:`Phụ trách tổ chức sự kiện, truyền thông nội bộ cho chương trình và phối hợp công tác thi đấu.\n\nBộ phận này tham gia xây dựng kịch bản hoạt động, hỗ trợ điều hành sân chơi kỹ thuật, chuẩn bị các mốc thi đấu và kết nối các đội tuyển với lực lượng hỗ trợ.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'logistics', label:'Hậu cần – Kỹ thuật', shape:'round', x:81, y:60, w:5, h:24, type:'info',
    kicker:'Ban điều hành', title:'Hậu cần – Kỹ thuật',
    body:`Phụ trách bảo đảm trang thiết bị, vật tư, dụng cụ và hỗ trợ kỹ thuật cho các hoạt động của câu lạc bộ.\n\nBộ phận này giúp chuẩn bị không gian, phương tiện, vật tư tiêu hao, xử lý các vấn đề kỹ thuật phát sinh và bảo đảm hoạt động được vận hành ổn định.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  {
    id:'media', label:'Truyền thông – Đối ngoại', shape:'round', x:87, y:60, w:5, h:24, type:'info',
    kicker:'Ban điều hành', title:'Truyền thông – Đối ngoại',
    body:`Phụ trách truyền thông hình ảnh, kết nối đối ngoại và lan tỏa hoạt động của câu lạc bộ.\n\nBộ phận này hỗ trợ viết tin, thiết kế nội dung truyền thông, ghi hình – chụp ảnh, duy trì kênh liên lạc với đối tác và quảng bá giá trị của câu lạc bộ tới cộng đồng.\n\nNhân sự phụ trách: Đang cập nhật.`
  },
  { id:'outerMembers', label:'Thành viên tập sự', shape:'rect', x:16.2, y:82.8, w:25.8, h:21.0, type:'members', memberGroupId:'outerMembers' },
  { id:'innerMembers', label:'Thành viên chính thức', shape:'rect', x:49.8, y:82.8, w:24.8, h:21.0, type:'members', memberGroupId:'innerMembers' },
  { id:'coreMembers', label:'Thành viên nòng cốt', shape:'rect', x:83.0, y:82.8, w:25.8, h:21.0, type:'members', memberGroupId:'coreMembers' }
];

function initials(name){
  if (!name || name === '—') return 'CLB';
  return name.replace(/^(PGS\.?|GS\.?|TS\.?|ThS\.?|KS\.?)\s*/i, '').trim().split(/\s+/).slice(-2).map(word => word[0]).join('').toUpperCase();
}
function safeText(value){ return value && String(value).trim() ? value : 'Đang cập nhật'; }
function switchPage(page){ Object.entries(pages).forEach(([key, el]) => el.classList.toggle('is-active', key === page)); }
function resetViews(){ messageView.classList.add('hidden'); profileView.classList.add('hidden'); memberView.classList.add('hidden'); }
function replayScrollAnimation(){ scrollCard.style.animation = 'none'; void scrollCard.offsetWidth; scrollCard.style.animation = ''; }
function openModal(){ modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); replayScrollAnimation(); }
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
function openMessage({ kicker = '', title = '', body = 'Đang cập nhật', html = false } = {}){
  resetViews(); messageView.classList.remove('hidden'); messageFields.kicker.textContent = kicker; messageFields.title.textContent = title;
  if (html) messageFields.body.innerHTML = body; else messageFields.body.textContent = body; openModal();
}
function openProfile(profile){
  resetViews(); profileView.classList.remove('hidden');
  profileFields.group.textContent = safeText(profile.group); profileFields.name.textContent = safeText(profile.name); profileFields.role.textContent = safeText(profile.role); profileFields.position.textContent = safeText(profile.position); profileFields.academicRank.textContent = safeText(profile.academicRank); profileFields.degree.textContent = safeText(profile.degree); profileFields.responsibility.textContent = safeText(profile.responsibility); profileFields.avatar.textContent = initials(profile.name);
  if (profile.email && profile.email.includes('@')) profileFields.email.innerHTML = `<a href="mailto:${profile.email}">${profile.email}</a>`; else profileFields.email.textContent = safeText(profile.email);
  openModal();
}
function openMembers(group){
  resetViews(); memberView.classList.remove('hidden'); memberFields.group.textContent = group.group || ''; memberFields.title.textContent = group.title || ''; memberFields.tbody.innerHTML = '';
  group.members.forEach(member => { const tr = document.createElement('tr'); const nameHTML = member.name && member.name.trim() ? member.name : '<span class="placeholder">Chưa cập nhật</span>'; const classHTML = member.className && member.className.trim() ? member.className : '<span class="placeholder">Chưa cập nhật</span>'; tr.innerHTML = `<td class="col-stt">${member.stt}</td><td>${nameHTML}</td><td>${classHTML}</td>`; memberFields.tbody.appendChild(tr); });
  openModal();
}
function openMazeCompetition(){
  openMessage({ kicker:'Thí Luyện Trường', title:'Cuộc thi Robot Mê Cung', html:true, body:`<div class="maze-card"><div class="maze-poster-wrap"><img class="maze-poster" src="assets/maze-poster.webp" alt="Poster cuộc thi Robot Mê Cung" /></div><div class="maze-copy"><div class="maze-title">ROBOT MÊ CUNG 2026</div><div class="maze-desc">Sân chơi thực hành Robotics, lập trình và điều khiển tự động dành cho học viên, sinh viên. Nội dung thi kết hợp mê cung, line và vận hành robot tự động; là không gian rèn luyện kỹ năng chế tạo, tối ưu thuật toán và thi đấu thực chiến.</div><div class="maze-note">Cuộc thi đang được giới thiệu tại khu vực <strong>Thí Luyện Trường</strong>.</div><a class="maze-link" href="${MAZE_URL}" target="_blank" rel="noopener noreferrer">Vào trang cuộc thi →</a></div></div>` });
}
function createHotspot(item, index, clickHandler){
  const button = document.createElement('button'); button.type = 'button'; const variantClass = item.shape === 'poster' ? 'poster-badge' : (item.shape === 'rect' ? 'rect' : 'round'); button.className = `hotspot ${variantClass}`; button.style.left = `${item.x}%`; button.style.top = `${item.y}%`; button.style.width = `${item.w}%`; button.style.height = `${item.h}%`; button.style.setProperty('--delay', `${(index % 7) * 0.2}s`); button.setAttribute('aria-label', item.label); button.title = item.label;
  if (item.shape === 'poster' && item.image) { const posterThumb = document.createElement('span'); posterThumb.className = 'poster-thumb'; posterThumb.style.backgroundImage = `url("${item.image}")`; button.appendChild(posterThumb); }
  const tooltip = document.createElement('span'); tooltip.className = 'tooltip'; tooltip.textContent = item.label; button.appendChild(tooltip); button.addEventListener('click', clickHandler); return button;
}
function renderHomeSpots(){
  homeHotspots.innerHTML = '';
  homeSpots.forEach((item, index) => {
    const button = createHotspot(item, index, () => {
      if (item.action === 'goto-org') switchPage('org');
      else if (item.action === 'intro') openMessage({ kicker:'Sơn Môn', title:'Giới thiệu câu lạc bộ', body:INTRO_TEXT });
      else if (item.action === 'maze') openMazeCompetition();
      else if (item.action === 'info') openMessage({ kicker:item.kicker, title:item.title, body:item.body });
      else openMessage({ kicker:item.label, title:item.label, body:'Đang cập nhật' });
    });
    homeHotspots.appendChild(button);
  });
}
function renderOrgSpots(){
  orgHotspots.innerHTML = '';
  orgSpots.forEach((item, index) => {
    const button = createHotspot(item, index, () => {
      if (item.type === 'profile') openProfile(staffProfiles[item.profileId]);
      else if (item.type === 'members') openMembers(memberGroups[item.memberGroupId]);
      else if (item.type === 'info') openMessage({ kicker:item.kicker, title:item.title, body:item.body });
      else openMessage({ kicker:item.label, title:item.label, body:'Đang cập nhật' });
    });
    orgHotspots.appendChild(button);
  });
}

document.querySelectorAll('[data-close="modal"]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
backHomeBtn.addEventListener('click', () => switchPage('home'));
renderHomeSpots(); renderOrgSpots(); switchPage('home');
