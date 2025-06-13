const musicData = {
  happy: [
    {
      title: "무조건 극락 가는 팝송 띵곡",
      url: "https://www.youtube.com/watch?v=7h_kCufnEso&list=RD7h_kCufnEso&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/7h_kCufnEso/0.jpg",
    },
    {
      title: "하루종일 틀어놔도 질리지 않는 둠칫한 국내 노래모음",
      url: "https://www.youtube.com/watch?v=RDypwcB7ONY&list=RDRDypwcB7ONY&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/RDypwcB7ONY/0.jpg",
    },
  ],
  sad: [
    {
      title: "마음이 복잡하고 힘들 때 듣는 잔잔한팝송",
      url: "https://www.youtube.com/watch?v=mR0m5Ma19Ps&list=RDmR0m5Ma19Ps&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/mR0m5Ma19Ps/0.jpg",
    },
    {
      title: "힘들고 지친 모든 이에게",
      url: "https://www.youtube.com/watch?v=B5uMVjhXOzc&list=RDB5uMVjhXOzc&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/B5uMVjhXOzc/0.jpg",
    },
  ],
  focus: [
    {
      title: "숲 공기🌿가득 마시며 일하기",
      url: "https://www.youtube.com/watch?v=Yuw8TnTei58&list=RDYuw8TnTei58&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/Yuw8TnTei58/0.jpg",
    },
    {
      title: "과제할 때 듣기 좋은 노래 모음",
      url: "https://www.youtube.com/watch?v=1sTc7I20u3A",
      thumbnail: "https://img.youtube.com/vi/1sTc7I20u3A/0.jpg",
    },
  ],
  angry: [
    {
      title: "화났을 때 듣기 좋은 팝송 모음",
      url: "https://www.youtube.com/watch?v=71hZutqP_cM&list=RD71hZutqP_cM&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/71hZutqP_cM/0.jpg",
    },
    {
      title: "🔥짜증날 때 듣는 노래 모음🔥",
      url: "https://www.youtube.com/watch?v=pgsathBaftg&list=RDpgsathBaftg&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/pgsathBaftg/0.jpg",
    },
  ],
  tired: [
    {
      title: "이런 날도 있고 저런 날도 있지",
      url: "https://www.youtube.com/watch?v=-RqgJz-v12I&list=RD-RqgJz-v12I&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/-RqgJz-v12I/0.jpg",
    },
    {
      title: "마음이 복잡하고 힘들 때",
      url: "https://www.youtube.com/watch?v=IjGmfqLvF14&list=RDIjGmfqLvF14&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/IjGmfqLvF14/0.jpg",
    },
  ],
  comfort: [
    {
      title: "포근포근 이불 속에서 듣는 감성 팝",
      url: "https://www.youtube.com/watch?v=PrqwxkBB0DA&list=RDPrqwxkBB0DA&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/PrqwxkBB0DA/0.jpg",
    },
    {
      title: "아무 생각하기 싫을 때 가만히 듣기 좋은 잔잔한 재즈",
      url: "https://www.youtube.com/watch?v=Llour2YvsiI&list=RDLlour2YvsiI&start_radio=1",
      thumbnail: "https://img.youtube.com/vi/Llour2YvsiI/0.jpg",
    },
  ],
};

const moodTextMap = {
  happy: "기쁠",
  sad: "슬플",
  focus: "집중할",
  angry: "짜증날",
  tired: "피곤할",
  comfort: "편안할"
};

// 현재 선택된 기분을 저장할 변수
let currentMood = null;

function recommendMusic(mood) {
  const resultDiv = document.getElementById("music-result");
  const retryContainer = document.getElementById("retry-container");
  const moodButtons = document.getElementById("mood-buttons");

  const musicList = musicData[mood];
  if (musicList && musicList.length > 0) {
    const randomIndex = Math.floor(Math.random() * musicList.length);
    const music = musicList[randomIndex];

    resultDiv.innerHTML = `
      <p><strong>${moodTextMap[mood]}때 추천하는 플레이리스트</strong></p>
      <a href="${music.url}" target="_blank">
        <img src="${music.thumbnail}" alt="${music.title}" width="300" />
      </a>
      <p><strong style="font-size: 18px;">${music.title}</strong></p>
    `;

    currentMood = mood;
    retryContainer.style.display = "block";

    // 버튼을 한 줄로 변경
    moodButtons.classList.add("inline");
  }
}
document.getElementById("retry-button").addEventListener("click", () => {
  if (currentMood) {
    recommendMusic(currentMood);
  }
});