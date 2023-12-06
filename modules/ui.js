import { getData } from "./http";
// import { reload_actor_page } from "../pages/actor/js/script";

const img_ip = import.meta.env.VITE_IMAGE_URL;

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
    div.classList.add("hover");

    span.innerHTML = item.title;
    img.src = img_ip + item.poster_path;
    rating.innerHTML = item.vote_average;
    a.innerHTML = "Карточка фильма";

    let href = "/pages/movie/?id=" + item.id;

    console.log({ item });
    a.href = href;

    div.append(img);
    a.append(button);
    li.append(div, span, rating, a);
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

  actor_place_one.innerHTML = arr[0].popularity;
  actor_place_two.innerHTML = arr[1].popularity;

  actor_name_one.innerHTML = arr[0].name;
  actor_name_two.innerHTML = arr[1].name;

  actor_block_name.innerHTML = arr[0].original_name;
  actor_block_name_two.innerHTML = arr[1].original_name;

  actor_block_age.innerHTML = arr[0].known_for[2].vote_average;
  actor_block_age_two.innerHTML = arr[1].known_for[2].vote_average;

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
  place.innerHTML = "";
  for (let item of arr) {
    let li = document.createElement("li");

    li.innerHTML = item.name;
    li.onclick = () => {
      reload_genres(item.genres, place);
    };
    place.append(li);

    li.onclick = () => {
      li.classList.toggle("active_genre");
      // console.log(item.id)
      // h1.innerHTML = item.name
      getData("/discover/movie?with_genres=" + item.id).then((res) =>
        reload(
          res?.data?.results.slice(0, 8),
          document.querySelector(".ul_reload")
        )
      );
      btn.onclick = (e) => {
        e.preventDefault();
        getData("/discover/movie?with_genres=" + item.id).then((res) =>
          reload(res?.data?.results, document.querySelector(".ul_reload"))
        );
      };
    };
  }
}

export function reload_actor_page(arr, place) {
  
  let actor_name_head = document.querySelector(".actor_name_head");
  let actor_name = document.querySelector(".actor_name");
  let actor_name_second = document.querySelector(".actor_name_second");
  let actor_img = document.querySelector(".actor_img");
  let date_of_birth = document.querySelector(".date_of_birth");
  let known_for = document.querySelector(".known_for");
  let place_of_birth = document.querySelector(".place_of_birth");
  let movie_amount = document.querySelector(".movie_amount");
  
    actor_name_second.innerHTML = arr[0].known_for[0].original_name
    actor_name.innerHTML = arr[0].name
    actor_name_head.innerHTML = arr[0].original_name
    actor_img.src =img_ip + arr[0].profile_path 
    date_of_birth.innerHTML = arr[0].original_name
    date_of_birth.innerHTML = arr[0].known_for[2].release_date
    known_for.innerHTML = arr[0].known_for_department
    place_of_birth.innerHTML = arr[0].known_for[0].origin_country
    movie_amount.innerHTML = arr[0].known_for[0].vote_average
    console.log(arr);


}