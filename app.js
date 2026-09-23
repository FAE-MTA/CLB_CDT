const people = [
  {
    id: 'chairman', x: 50.2, y: 24.5, w: 12.5, h: 19.0,
    group: 'Ban Chủ nhiệm', short: 'Chủ nhiệm', kind: 'profile',
    name: 'TS. Nguyễn Ngọc Bình', role: 'Chủ nhiệm Câu lạc bộ',
    position: 'Chủ nhiệm CLB Cơ điện tử', academicRank: '—', degree: 'Tiến sĩ',
    email: 'binhnn@lqdtu.edu.vn',
    responsibility: 'Phụ trách chung các hoạt động của câu lạc bộ.'
  },
  {
    id: 'vice', x: 49.3, y: 43.3, w: 10.0, h: 15.0,
    group: 'Ban Chủ nhiệm', short: 'Phó Chủ nhiệm', kind: 'profile',
    name: '—', role: 'Phó Chủ nhiệm', position: 'Phó Chủ nhiệm CLB Cơ điện tử',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'mechanics', x: 14.0, y: 54.3, w: 9.0, h: 13.5,
    group: 'Ban chuyên môn', short: 'Cơ khí – Kết cấu', kind: 'profile',
    name: '—', role: 'Giảng viên phụ trách Cơ khí – Kết cấu', position: 'Ban chuyên môn',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'electronics', x: 25.8, y: 54.0, w: 9.0, h: 13.5,
    group: 'Ban chuyên môn', short: 'Điện – Điện tử', kind: 'profile',
    name: '—', role: 'Giảng viên phụ trách Điện – Điện tử', position: 'Ban chuyên môn',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'control', x: 37.0, y: 54.2, w: 9.0, h: 13.5,
    group: 'Ban chuyên môn', short: 'Lập trình – Điều khiển', kind: 'profile',
    name: '—', role: 'Giảng viên phụ trách Lập trình – Điều khiển', position: 'Ban chuyên môn',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'planning', x: 58.7, y: 54.2, w: 7.2, h: 13.0,
    group: 'Ban điều hành', short: 'Kế hoạch – Hành chính', kind: 'profile',
    name: '—', role: 'Phụ trách Kế hoạch – Hành chính', position: 'Ban điều hành',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'training', x: 66.4, y: 54.0, w: 7.2, h: 13.0,
    group: 'Ban điều hành', short: 'Đào tạo – Thành viên', kind: 'profile',
    name: '—', role: 'Phụ trách Đào tạo – Thành viên', position: 'Ban điều hành',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'events', x: 74.2, y: 54.0, w: 7.2, h: 13.0,
    group: 'Ban điều hành', short: 'Sự kiện – Thi đấu', kind: 'profile',
    name: '—', role: 'Phụ trách Sự kiện – Thi đấu', position: 'Ban điều hành',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'logistics', x: 82.1, y: 54.0, w: 7.2, h: 13.0,
    group: 'Ban điều hành', short: 'Hậu cần – Kỹ thuật', kind: 'profile',
    name: '—', role: 'Phụ trách Hậu cần – Kỹ thuật', position: 'Ban điều hành',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  },
  {
    id: 'media', x: 89.7, y: 54.0, w: 7.2, h: 13.0,
    group: 'Ban điều hành', short: 'Truyền thông – Đối ngoại', kind: 'profile',
    name: '—', role: 'Phụ trách Truyền thông – Đối ngoại', position: 'Ban điều hành',
    academicRank: '—', degree: '—', email: '—', responsibility: '—'
  }
];

const memberGroups = [
  {
    id: 'outer-members', x: 15.4, y: 85.5, w: 25.0, h: 21.0,
    group: 'Thành viên câu lạc bộ', title: 'Ngoại môn đệ tử (Tập sự)', kind: 'members',
    members: Array.from({ length: 8 }, (_, i) => ({ stt: i + 1, name: '', className: '' }))
  },
  {
    id: 'inner-members', x: 49.8, y: 85.5, w: 22.0, h: 21.0,
    group: 'Thành viên câu lạc bộ', title: 'Nội môn đệ tử (Chính thức)', kind: 'members',
    members: Array.from({ length: 8 }, (_, i) => ({ stt: i + 1, name: '', className: '' }))
  },
  {
    id: 'core-members', x: 82.6, y: 85.5, w: 26.0, h: 21.0,
    group: 'Thành viên câu lạc bộ', title: 'Chân truyền đệ tử (Nòng cốt)', kind: 'members',
    members: Array.from({ length: 8 }, (_, i) => ({ stt: i + 1, name: '', className: '' }))
  }
];

const hotspots = document.getElementById('hotspots');
const modal = document.getElementById('profileModal');
const profileCard = modal.querySelector('.profile-card');
const profileView = document.getElementById('profileView');
const memberView = document.getElementById('memberView');
const fields = {
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

function initials(name){
  if (!name || name === '—') return 'CLB';
  return name
    .replace(/^(PGS\.?|GS\.?|TS\.?|ThS\.?|KS\.?)\s*/i, '')
    .trim()
    .split(/\s+/)
    .slice(-2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

function valueOrDash(value){
  return value && String(value).trim() ? value : '—';
}

function restartScrollAnimation() {
  profileCard.style.animation = 'none';
  void profileCard.offsetWidth;
  profileCard.style.animation = '';
}

function openModal(){
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  restartScrollAnimation();
}

function showProfileView(person){
  memberView.classList.add('hidden');
  profileView.classList.remove('hidden');

  fields.group.textContent = valueOrDash(person.group);
  fields.name.textContent = valueOrDash(person.name);
  fields.role.textContent = valueOrDash(person.role);
  fields.position.textContent = valueOrDash(person.position);
  fields.academicRank.textContent = valueOrDash(person.academicRank);
  fields.degree.textContent = valueOrDash(person.degree);
  fields.responsibility.textContent = valueOrDash(person.responsibility);
  fields.avatar.textContent = initials(person.name);

  if (person.email && person.email.includes('@')) {
    fields.email.innerHTML = `<a href="mailto:${person.email}">${person.email}</a>`;
  } else {
    fields.email.textContent = valueOrDash(person.email);
  }

  openModal();
}

function showMemberView(group){
  profileView.classList.add('hidden');
  memberView.classList.remove('hidden');

  memberFields.group.textContent = valueOrDash(group.group);
  memberFields.title.textContent = valueOrDash(group.title);

  memberFields.tbody.innerHTML = '';
  group.members.forEach(member => {
    const row = document.createElement('tr');
    const name = member.name && member.name.trim() ? member.name : '<span class="placeholder">Chưa cập nhật</span>';
    const className = member.className && member.className.trim() ? member.className : '<span class="placeholder">Chưa cập nhật</span>';
    row.innerHTML = `
      <td class="col-stt">${member.stt}</td>
      <td>${name}</td>
      <td>${className}</td>
    `;
    memberFields.tbody.appendChild(row);
  });

  openModal();
}

function renderHotspots(){
  hotspots.innerHTML = '';
  const allItems = [...people, ...memberGroups];
  allItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `hotspot ${item.kind === 'members' ? 'member-spot' : 'profile-spot'}`;
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.style.width = `${item.w}%`;
    button.style.height = `${item.h}%`;
    button.style.setProperty('--delay', `${(index % 6) * 0.25}s`);
    button.setAttribute('aria-label', item.short || item.title || 'Xem thông tin');
    button.title = item.short || item.title || 'Xem thông tin';
    button.addEventListener('click', () => {
      if (item.kind === 'members') {
        showMemberView(item);
      } else {
        showProfileView(item);
      }
    });
    hotspots.appendChild(button);
  });
}

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-close="modal"]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

renderHotspots();
