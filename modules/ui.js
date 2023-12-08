import { getData } from "./http"

const img_ip = import.meta.env.VITE_IMAGE_URL


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
    a.href = `/pages/movie/index.html?id=${item.id}`;

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
    // button.onclick = () => {
    // 	window.location.href = `https://www.themoviedb.org/movie/${item.id}`
    // }
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

  actor_block_age.innerHTML = arr[0].known_for[2].vote_average
  actor_block_age_two.innerHTML = arr[1].known_for[2].vote_average

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

let actor_block_one = document.querySelector(".actor_block_one");


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


export function news_reload(arr, place) {
  place.innerHTML = " "
  let num = 0
  for (let item of arr) {
    if (num == 17) {
      num = 0
    }

    let news_box = document.createElement('div')
    let news_bg = document.createElement('div')
    let news_bg_blue = document.createElement('div')
    let new_info_box = document.createElement('div')
    let p_new = document.createElement('p')
    let new_details = document.createElement('div')
    let new_date_p = document.createElement('p')
    let view_box = document.createElement('div')
    let new_views_img = document.createElement('img')
    let new_views_p = document.createElement('p')
    let comment_box = document.createElement('div')
    let new_comment_img = document.createElement('img')
    let new_comment_p = document.createElement('p')
    let new_title = document.createElement('p')

    news_box.classList.add('news_box')
    news_box.classList.add(`${num}`)
    if (num == 3) {
      news_box.classList.add('four')
    } else if (num == 6) {
      news_box.classList.add('seven')
    } else if (num == 10) {
      news_box.classList.add('nine')
    } else if (num == 13) {
      news_box.classList.add('twelve')
    }

    news_bg.classList.add('news_bg')
    news_bg_blue.classList.add('news_bg_blue')
    new_info_box.classList.add('new_info_box')
    p_new.classList.add('p_new')
    new_details.classList.add('new_details')
    new_date_p.classList.add('new_date_p')
    view_box.classList.add('view_box')
    new_views_img.classList.add('new_views_img')
    new_views_p.classList.add('new_views_p')
    comment_box.classList.add('comment_box')
    new_comment_img.classList.add('new_comment_img')
    new_comment_p.classList.add('new_comment_p')
    new_title.classList.add('new_title')
    p_new.innerHTML = 'Новость'
    new_date_p.innerHTML = item.publishedAt.split('T')[0]
    new_views_img.src = '/Kinoarea/public/img/eyee.png'
    new_views_p.innerHTML = '120'
    new_comment_img.src = '/Kinoarea/public/img/comment 1.png'
    new_comment_p.innerHTML = '9'
    new_title.innerHTML = item.title
    news_box.style.background = `url(${item.urlToImage}) center no-repeat`
    news_box.style.backgroundSize = 'cover'

    place.append(news_box)
    news_box.append(new_info_box, news_bg)
    news_bg.append(news_bg_blue)
    new_info_box.append(p_new, new_details, new_title)
    new_details.append(new_date_p, view_box, comment_box)
    view_box.append(new_views_img, new_views_p)
    comment_box.append(new_comment_img, new_comment_p)
    num++

    news_box.onmouseenter = () => {
      news_bg_blue.classList.add('news_bg_active')
    }
    news_box.onmouseleave = () => {
      news_bg_blue.classList.remove('news_bg_active')
    }
  }
}