import { getData } from "./http"

const img_ip = import.meta.env.VITE_IMAGE_URL
let id = location.search.split('=').at(-1)

export function reload(arr, place) {
  place.innerHTML = "";

  for (let item of arr) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let span = document.createElement("span");
    let rating = document.createElement("span");
    let button = document.createElement("button");
    let a = document.createElement("a");

    span.classList.add("p");
    rating.classList.add("rating");
    button.classList.add("button");
    div.classList.add('hover')

    span.innerHTML = item.title;
    img.src = img_ip + item.poster_path;
    rating.innerHTML = item.vote_average;
    a.innerHTML = "Карточка фильма";
    a.href = "/pages/news_description/?id=" + item.id;

    div.append(img)
    li.append(div, span, rating, button);
    button.append(a);
    place.append(li);

    if (item.vote_average < " 5.0") {
      rating.style.backgroundColor = "#CB3F36";
    }
    li.onmouseenter = () => {
      button.classList.add("btn_flex");
    };
    li.onmouseleave = () => {
      button.classList.remove("btn_flex");
    };

  }
}

let actors_box = document.querySelector(".actors_box");
let actors_blocks = document.querySelector(".actors_blocks");
let for_year = document.querySelector(".for_year");
let for_month = document.querySelector(".for_month");
let for_week = document.querySelector(".for_week");
// let actors_name_block = document.querySelector(".actors_name_block");

export function reload_actors(arr, place) {
  // place.innerHTML = ""
  let actors_name_block = document.querySelector(".actors_name_block");

  let actor_block_one = document.querySelector(".actor_block_one");
  let actor_block_two = document.querySelector(".actor_block_two");

  let actor_place_one = document.querySelector(".actor_place_one");
  let actor_place_two = document.querySelector(".actor_place_two");

  let actor_name_one = document.querySelector(".actor_name_one");
  let actor_name_two = document.querySelector(".actor_name_two");

  let actor_block_name = document.querySelector(".actor_block_name");
  let actor_block_name_two = document.querySelector(".actor_block_name_two");

  let actor_block_age = document.querySelector(".actor_block_age");
  let actor_block_age_two = document.querySelector(".actor_block_age_two");

  let img1 = document.createElement("img");
  let img2 = document.createElement("img");

  img1.classList.add("actor_pic");
  img2.classList.add("actor_pic");

  actor_block_one.append(img1);
  actor_block_two.append(img2);

  img1.src = img_ip + arr[0].profile_path;
  img2.src = img_ip + arr[1].profile_path;

  actor_place_one.innerHTML = arr[0].popularity
  actor_place_two.innerHTML = arr[1].popularity

  actor_name_one.innerHTML = arr[0].name
  actor_name_two.innerHTML = arr[1].name

  actor_block_name.innerHTML = arr[0].original_name
  actor_block_name_two.innerHTML = arr[1].original_name

  actor_block_age.innerHTML = arr[0].known_for[2]
  actor_block_age_two.innerHTML = arr[1].known_for[2]

  // console.log(arr);

  for (let item of arr) {
    let actors_info = document.createElement("div");
    let actors_name_block_left = document.createElement("div");
    let actors_name_block_right = document.createElement("div");
    let actors_name_block_one = document.createElement("h1");
    let actors_name_block_two = document.createElement("h2");
    let actors_name_block_three = document.createElement("h3");
    let actors_name_block_place = document.createElement("h1");

    actors_info.classList.add("actors_info");
    actors_name_block_left.classList.add("actors_name_block_left");
    actors_name_block_right.classList.add("actors_name_block_right");
    actors_name_block_one.classList.add("actors_name_block_one");
    actors_name_block_two.classList.add("actors_name_block_two");
    actors_name_block_three.classList.add("actors_name_block_three");
    actors_name_block_place.classList.add("actors_name_block_place");

    actors_name_block_one.innerHTML = item.name;
    actors_name_block_two.innerHTML = item.original_name;
    actors_name_block_three.innerHTML = item.adult;
    actors_name_block_place.innerHTML = item.popularity;

    actors_name_block.append(actors_info);
    actors_info.append(actors_name_block_left, actors_name_block_right);
    actors_name_block_left.append(
      actors_name_block_one,
      actors_name_block_two,
      actors_name_block_three
    );
    actors_name_block_right.append(actors_name_block_place);
  }
}

export function reload_genres(arr, place, btn) {
  place.innerHTML = ""
  for (let item of arr) {
    let li = document.createElement('li')

    li.innerHTML = item.name
    li.onclick = () => {
      reload_genres(item.genres, place)
    }
    place.append(li)

    li.onclick = () => {
      li.classList.toggle('active_genre')
      // console.log(item.id)
      // h1.innerHTML = item.name
      getData('/discover/movie?with_genres=' + item.id)
        .then(res => reload(res?.data?.results.slice(0, 8), document.querySelector('.ul_reload')))
      btn.onclick = (e) => {
        e.preventDefault()
        getData('/discover/movie?with_genres=' + item.id)
          .then(res => reload(res?.data?.results, document.querySelector('.ul_reload')))
      }
    }

  }
}

export function footers() {
  let main = document.querySelector('main')
  let footer = document.createElement('footer')
  let container = document.createElement('div')
  let wraper = document.createElement('div')
  let center = document.createElement('div')
  let img_area = document.createElement('img')
  let h2_area = document.createElement('h2')
  let footer_descript = document.createElement('div')
  let h2_footer = document.createElement('h2')
  let p_footer = document.createElement('p')
  let form = document.createElement('form')
  let input = document.createElement('input')
  let btn = document.createElement('button')
  let politic = document.createElement('div')
  let input_chec = document.createElement('input')
  let p_politic = document.createElement('p')
  let strong = document.createElement('strong')
  let centr = document.createElement('center')
  let icons = document.createElement('div'),
    icons2 = document.createElement('img'),
    icons3 = document.createElement('img'),
    icons4 = document.createElement('img'),
    icons5 = document.createElement('img'),
    icons6 = document.createElement('img');
  let news = document.createElement('div')
  let ul = document.createElement('ul'),
    li = document.createElement('li'),
    li2 = document.createElement('li'),
    li3 = document.createElement('li'),
    li4 = document.createElement('li'),
    li5 = document.createElement('li'),
    li6 = document.createElement('li');
  let p = document.createElement('p')
  let a = document.createElement('a')

  container.classList.add('container')
  wraper.classList.add('wraper')
  center.classList.add('cnter')
  img_area.classList.add('img_area')
  footer_descript.classList.add('footer_descript')
  h2_footer.classList.add('h2_footer')
  p_footer.classList.add('p_footer')
  form.classList.add('form')
  input.classList.add('form_input')
  btn.classList.add('form_btn')
  politic.classList.add('politic')
  strong.classList.add('politic_strong')
  input_chec.classList.add('politic_input')
  centr.classList.add('center')
  icons.classList.add('icons')
  icons2.classList.add('icons_img')
  icons3.classList.add('icons_img')
  icons4.classList.add('icons_img')
  icons5.classList.add('icons_img')
  icons6.classList.add('icons_img')
  news.classList.add('news')
  ul.classList.add('news_ul')
  a.classList.add('a')
  p.classList.add('p')



  img_area.src = "/public/img/XMLID 1219.png"
  h2_area.innerHTML = "Kinoarea"
  h2_footer.innerHTML = "Подпишитесь на E-mail рассылку"
  p_footer.innerHTML = "Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E - mail рассылку!"
  input.type = 'email'
  input.required = true
  input.placeholder = 'Введите E-mail'
  btn.innerHTML = "Подписаться"
  input_chec.type = 'checkbox'
  p_politic.innerHTML = "Соглашаюсь на условия"
  strong.innerHTML = "политики конфиденциальности"
  icons2.src = '/public/img/1298747_instagram_brand_logo_social media_icon.png'
  icons3.src = '/public/img/3171659_vk_vkontakte_icon.png'
  icons4.src = '/public/img/3225194_app_facebook_logo_media_popular_icon.png'
  icons5.src = '/public/img/1298778_youtube_play_video_icon.png'
  icons6.src = '/public/img/8598119_twiter_chat_message_comment_icon.png'
  li.innerHTML = "Афиша"
  li2.innerHTML = "Новости"
  li3.innerHTML = "Персоны"
  li4.innerHTML = "Рейтинг"
  li5.innerHTML = "Рецензия"
  li6.innerHTML = "Коталог фильмов"
  p.innerHTML = "2020 © Kinoarea. Все права защищены"
  a.innerHTML = 'Политика конфиденциальности'
  a.href = ''

  main.after(footer)
  footer.prepend(container, wraper)
  container.append(wraper)
  wraper.append(center, footer_descript)
  center.append(img_area, h2_area)
  footer_descript.append(h2_footer, p_footer, form, politic)
  form.append(input, btn)
  politic.append(input_chec, p_politic)
  p_politic.append(strong)
  container.append(centr)
  centr.append(icons, news, p, a)
  icons.append(icons2, icons3, icons4, icons5, icons6)
  news.append(ul)
  ul.append(li, li2, li3, li4, li5, li6)
}

