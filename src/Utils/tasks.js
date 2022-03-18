import woman1 from "../assets/images/woman1.jpg";
import woman2 from "../assets/images/woman2.jpg";
import woman3 from "../assets/images/woman3.jpg";
import woman4 from "../assets/images/woman4.jpg";
import woman5 from "../assets/images/woman5.jpg";
import woman6 from "../assets/images/woman6.jpg";
import woman7 from "../assets/images/woman7.jpg";
import woman8 from "../assets/images/59.jpg";
import woman9 from "../assets/images/man9.jpg";
import woman10 from "../assets/images/man10.jpg";

const tasks = [
  {
    id: 1,
    name: "Finna A.",
    job: "UX Designer",
    percent: 68,
    image: woman1,
  },
  {
    id: 2,
    name: "Emma F.",
    job: "UX Designer",
    percent: 100,
    image: woman2,
  },
  {
    id: 3,
    name: "Alex B.",
    job: "UX Analyst",
    percent: 32,
    image: woman3,
  },
  {
    id: 4,
    name: "Cody D.",
    job: "UX Analyst",
    percent: 32,
    image: woman4,
  },
  {
    id: 5,
    name: "Samanta G.",
    job: "Senior UI/UX Designer",
    percent: 77,
    image: woman5,
  },
  {
    id: 6,
    name: "Erik F.",
    job: "UX Designer",
    percent: 42,
    image: woman6,
  },
  {
    id: 7,
    name: "Anna S.",
    job: "UI Designer",
    percent: 41,
    image: woman7,
  },
  {
    id: 8,
    name: "Michael A.",
    job: "Software Dev",
    percent: 41,
    image: woman9,
  },
  {
    id: 9,
    name: "Omoakin A.",
    job: "Jnr. Software Dev",
    percent: 35,
    image: woman10,
  },
  {
    id: 10,
    name: "Deborah.",
    job: "Tester",
    percent: 35,
    image: woman8,
  },
];

export function getAllUsers() {
  return tasks;
}
