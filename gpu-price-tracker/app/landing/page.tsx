"use client";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollManufacturers from "@/components/ScrollManufacturers";
import "./landing.scss";
import { useEffect, useRef } from "react";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
export default function Landing() {
  useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".gsap-stagger > :nth-child(1)",
      {
        opacity: 0.001,
        // y: 20,
        x: 40,
      },
      {
        opacity: 1,
        // y: 0,
        x: 0,
        delay: 0,
        stagger: 2,
        duration: 1.5,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      ".gsap-stagger > :nth-child(2)",
      {
        opacity: 0.001,
        // y: 20,
        x: -80,
      },
      {
        opacity: 1,
        x: 0.0001,
        delay: 0.4,
        stagger: 2,
        duration: 1.5,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      ".gsap-stagger > :nth-child(3)",
      {
        opacity: 0.001,
        x: 120,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.4,
        stagger: 2,
        duration: 1.5,
        ease: Power3.easeOut,
      }
    );
    gsap.fromTo(
      ".gsap-stagger > :nth-child(4)",
      {
        opacity: 0.001,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 2,
        duration: 2,
        ease: Power3.easeOut,
      }
    );

    gsap.to(".gsap-banner > *", {
      x: -500,
      duration: 6,
      repeat: -1,
      yoyo: true,
      yoyoEase: "sine.out",
    });
  }, []);

  const handleInput = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      console.log(e.target.value);
      //TODO: redirect to browse page with search value
    }
  };

  return (
    <>
      <div id="scroller">
        <section className="main">
          <div className="flex flex-col p-8">
            <nav className="flex justify-evenly self-center w-4/5 text-gray-400">
              <span>Home</span>
              <span>About</span>
              <span>How it works</span>
              <span>Browse</span>
              <span>Test</span>
            </nav>
            <section className=" flex w-full h-screen z-10 justify-center items-center py-80">
              <div className=" gsap-stagger text-[10rem] leading-8 font-kinetika font-bold  flex flex-col items-center gap-24">
                <span className=" self-end">GPU</span>
                <span className=" self-end  ">PRICE</span>
                <span className=" self-end">TRACKER</span>
                <div className=" text-3xl mt-20">
                  <input
                    onKeyUp={(e) => handleInput(e)}
                    className="rounded-full py-4 px-8"
                    placeholder="RTX 4090"
                  ></input>
                </div>
              </div>
            </section>
            {/* <div className="noiseOverlay flex justify-end h-screen">
              <video
                className="w-4/5 h-screen mouse-md opacity-40"
                loop={true}
                muted
                autoPlay
                playsInline
                // poster={}
                data-aos="zoom-in-down"
              >
                <source
                  src={
                    "https://res.cloudinary.com/dyudvhug1/video/upload/v1716148067/vlc-record-2024-05-18-15h48m58s-ROG_Strix_GeForce_RTX_2080_Ti_and_2080_Graphics_Cards_Victory_Redefined-_erj2nz.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div> */}
          </div>

          <div data-scroll-section className=" h-screen flex flex-col">
            <div className=" flex flex-col text-8xl font-kinetika font-light  w-full text-wrap px-32 mb-32 gap-8">
              <h1 data-scroll data-scroll-speed="0.4">
                {" "}
                Welcome to GPU Price Tracker – Your Ultimate Resource for
                Finding the Best GPU Deals👋
              </h1>
              <h2 data-scroll data-scroll-speed="0.1">
                Explore prices across all major GPU manufacturers
              </h2>
            </div>
            <div>
              <ScrollManufacturers />
            </div>
          </div>
          {/* <div>
            <div className=" h-screen  text-sm font-kinetika m-32 leading-normal w-full">
              <h2 data-scroll data-scroll-speed="0.4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p data-scroll data-scroll-speed="0.1">
                😬
              </p>
            </div>
          </div> */}
          <section className="flex w-full h-screen justify-center items-center p-32 gap-40">
            <div data-scroll data-scroll-speed="0.1">
              <h3>Up-to-Date Prices</h3>
              <p>
                We continuously update prices from trusted stores, ensuring you
                always have the most current information.
              </p>
            </div>
            <div data-scroll data-scroll-speed="0.2">
              <h3>Comprehensive Store Coverage</h3>
              <p>
                See prices from multiple retailers, giving you a complete view
                of where to find the most affordable GPUs.
              </p>
            </div>
            <div data-scroll data-scroll-speed="0.3">
              <h3>Smart Search Tools</h3>
              <p>
                Quickly compare models and specifications to find the perfect
                GPU for your needs and budget.
              </p>
            </div>
          </section>

          <section className="flex flex-col w-full justify-center items-center p-32 bg-slate-300 text-black rounded-[50px]">
            <div className="flex w-full gap-64">
              <div className="flex flex-col w-1/2">
                <h3>Test header</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem, ipsum. Impedit, delectus dolor maxime magni quae,
                  ratione distinctio enim nostrum nisi odio animi soluta numquam
                  repudiandae repellat perferendis modi magnam!
                </p>
              </div>
              <div className="w-[500px] h-[500px] bg-slate-600"> image placeholder</div>
            </div>
            <div className="flex w-full gap-64">
            <div className="w-[500px] h-[500px] bg-slate-600"> image placeholder</div>
              <div className="flex flex-col w-1/2">
                <h3>Test header</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem, ipsum. Impedit, delectus dolor maxime magni quae,
                  ratione distinctio enim nostrum nisi odio animi soluta numquam
                  repudiandae repellat perferendis modi magnam!
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* 
        <section className="horizontal horizontal-container flex ">
          <div className="pin-wrap">
            <div className="animation-wrap to-right flex justify-center items-center overflow-hidden  gap-20">
              <div
                data-scroll
                data-scroll-speed="0.3"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-600 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.4"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-700 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-800 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.6"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-900 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-600 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.4"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-700 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.3"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-800 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.2"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-900 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-600 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.05"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-700 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-800 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.15"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-900 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.2"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-600 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.25"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-700 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.3"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-800 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-900 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-600 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-700 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-800 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-900 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-600 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-700 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-800 rounded-lg"
              ></div>
              <div
                data-scroll
                data-scroll-speed="0.1"
                data-scroll-direction="horizontal"
                className=" w-48 h-48 bg-slate-900 rounded-lg"
              ></div>
            </div>
          </div>
        </section> */}
        {/* <section className="blank">
          <h1>ScrollTrigger and Locomotive-Scroll</h1>
          <p>...</p>
        </section> */}
        {/*
        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
                ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
                dignissimos sunt ipsum repellendus totam optio distinctio.
                Laborum suscipit quia aperiam.
              </div>
              <div className="item">
                Animi, porro molestias? Reiciendis dolor aspernatur ab quos
                nulla impedit, dolores ullam hic commodi nobis nam. Dolorem
                expedita laudantium dignissimos nobis a. Dolorem, unde quidem.
                Tempora et a quibusdam inventore!
              </div>
              <div className="item">
                Labore, unde amet! Alias delectus hic laboriosam et dolorum?
                Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
                nostrum, tempore modi quo praesentium aspernatur vero dolor,
                ipsa unde perspiciatis minima.
              </div>
              <div className="item">
                Quaerat error dolorem aspernatur magni dicta ut consequuntur
                maxime tempore. Animi odio eos quod culpa nulla consectetur?
                Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
                voluptate laboriosam, officiis at ea!
              </div>
              <div className="item">
                Rem nobis facere provident magni minima iste commodi aliquam
                harum? Facere error quos cumque perspiciatis voluptatibus
                deserunt maiores, fugiat sunt sit ab inventore natus saepe,
                eveniet alias ipsam placeat voluptas!
              </div>
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
                sed dicta reiciendis, excepturi nisi perferendis, accusantium
                est suscipit tempora dolorum praesentium cupiditate doloribus
                non? Sint numquam recusandae dolore quis esse ea?
              </div>
              <div className="item">
                Temporibus cum dolor minima consequatur esse veritatis enim nemo
                cupiditate laborum doloribus reiciendis perferendis, quas fugit
                earum rerum, at beatae alias amet aspernatur dolorem dolore
                error commodi. Perspiciatis, reiciendis amet!
              </div>
              <div className="item">
                Vitae, tenetur beatae error corrupti odit expedita quisquam
                commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
                similique maiores praesentium quam! Optio tenetur saepe unde
                voluptatem minus tempora maxime temporibus ducimus ullam!
              </div>
            </div>
          </div>
        </section>

        <section className="blank">
          <h1>Nothing to see here...</h1>
          <p>...</p>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-left">
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
                ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
                dignissimos sunt ipsum repellendus totam optio distinctio.
                Laborum suscipit quia aperiam.
              </div>
              <div className="item">
                Animi, porro molestias? Reiciendis dolor aspernatur ab quos
                nulla impedit, dolores ullam hic commodi nobis nam. Dolorem
                expedita laudantium dignissimos nobis a. Dolorem, unde quidem.
                Tempora et a quibusdam inventore!
              </div>
              <div className="item">
                Labore, unde amet! Alias delectus hic laboriosam et dolorum?
                Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
                nostrum, tempore modi quo praesentium aspernatur vero dolor,
                ipsa unde perspiciatis minima.
              </div>
              <div className="item">
                Quaerat error dolorem aspernatur magni dicta ut consequuntur
                maxime tempore. Animi odio eos quod culpa nulla consectetur?
                Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
                voluptate laboriosam, officiis at ea!
              </div>
              <div className="item">
                Rem nobis facere provident magni minima iste commodi aliquam
                harum? Facere error quos cumque perspiciatis voluptatibus
                deserunt maiores, fugiat sunt sit ab inventore natus saepe,
                eveniet alias ipsam placeat voluptas!
              </div>
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
                sed dicta reiciendis, excepturi nisi perferendis, accusantium
                est suscipit tempora dolorum praesentium cupiditate doloribus
                non? Sint numquam recusandae dolore quis esse ea?
              </div>
              <div className="item">
                Temporibus cum dolor minima consequatur esse veritatis enim nemo
                cupiditate laborum doloribus reiciendis perferendis, quas fugit
                earum rerum, at beatae alias amet aspernatur dolorem dolore
                error commodi. Perspiciatis, reiciendis amet!
              </div>
              <div className="item">
                Vitae, tenetur beatae error corrupti odit expedita quisquam
                commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
                similique maiores praesentium quam! Optio tenetur saepe unde
                voluptatem minus tempora maxime temporibus ducimus ullam!
              </div>
            </div>
          </div>
        </section>

        <section className="blank">
          <h1>...scrollerProxy for the win...</h1>
          <p>...</p>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
                ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
                dignissimos sunt ipsum repellendus totam optio distinctio.
                Laborum suscipit quia aperiam.
              </div>
              <div className="item">
                Animi, porro molestias? Reiciendis dolor aspernatur ab quos
                nulla impedit, dolores ullam hic commodi nobis nam. Dolorem
                expedita laudantium dignissimos nobis a. Dolorem, unde quidem.
                Tempora et a quibusdam inventore!
              </div>
              <div className="item">
                Labore, unde amet! Alias delectus hic laboriosam et dolorum?
                Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
                nostrum, tempore modi quo praesentium aspernatur vero dolor,
                ipsa unde perspiciatis minima.
              </div>
              <div className="item">
                Quaerat error dolorem aspernatur magni dicta ut consequuntur
                maxime tempore. Animi odio eos quod culpa nulla consectetur?
                Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
                voluptate laboriosam, officiis at ea!
              </div>
              <div className="item">
                Rem nobis facere provident magni minima iste commodi aliquam
                harum? Facere error quos cumque perspiciatis voluptatibus
                deserunt maiores, fugiat sunt sit ab inventore natus saepe,
                eveniet alias ipsam placeat voluptas!
              </div>
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
                sed dicta reiciendis, excepturi nisi perferendis, accusantium
                est suscipit tempora dolorum praesentium cupiditate doloribus
                non? Sint numquam recusandae dolore quis esse ea?
              </div>
              <div className="item">
                Temporibus cum dolor minima consequatur esse veritatis enim nemo
                cupiditate laborum doloribus reiciendis perferendis, quas fugit
                earum rerum, at beatae alias amet aspernatur dolorem dolore
                error commodi. Perspiciatis, reiciendis amet!
              </div>
              <div className="item">
                Vitae, tenetur beatae error corrupti odit expedita quisquam
                commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
                similique maiores praesentium quam! Optio tenetur saepe unde
                voluptatem minus tempora maxime temporibus ducimus ullam!
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="blank">
          <h1>...keep scrollin scrollin scrollin scrollin...</h1>
          <p>...</p>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-left">
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
                ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
                dignissimos sunt ipsum repellendus totam optio distinctio.
                Laborum suscipit quia aperiam.
              </div>
              <div className="item">
                Animi, porro molestias? Reiciendis dolor aspernatur ab quos
                nulla impedit, dolores ullam hic commodi nobis nam. Dolorem
                expedita laudantium dignissimos nobis a. Dolorem, unde quidem.
                Tempora et a quibusdam inventore!
              </div>
              <div className="item">
                Labore, unde amet! Alias delectus hic laboriosam et dolorum?
                Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
                nostrum, tempore modi quo praesentium aspernatur vero dolor,
                ipsa unde perspiciatis minima.
              </div>
              <div className="item">
                Quaerat error dolorem aspernatur magni dicta ut consequuntur
                maxime tempore. Animi odio eos quod culpa nulla consectetur?
                Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
                voluptate laboriosam, officiis at ea!
              </div>
              <div className="item">
                Rem nobis facere provident magni minima iste commodi aliquam
                harum? Facere error quos cumque perspiciatis voluptatibus
                deserunt maiores, fugiat sunt sit ab inventore natus saepe,
                eveniet alias ipsam placeat voluptas!
              </div>
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
                sed dicta reiciendis, excepturi nisi perferendis, accusantium
                est suscipit tempora dolorum praesentium cupiditate doloribus
                non? Sint numquam recusandae dolore quis esse ea?
              </div>
              <div className="item">
                Temporibus cum dolor minima consequatur esse veritatis enim nemo
                cupiditate laborum doloribus reiciendis perferendis, quas fugit
                earum rerum, at beatae alias amet aspernatur dolorem dolore
                error commodi. Perspiciatis, reiciendis amet!
              </div>
              <div className="item">
                Vitae, tenetur beatae error corrupti odit expedita quisquam
                commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
                similique maiores praesentium quam! Optio tenetur saepe unde
                voluptatem minus tempora maxime temporibus ducimus ullam!
              </div>
            </div>
          </div>
        </section>

        <section className="blank">
          <h1>...lorem ipsum...</h1>
          <p>...</p>
        </section>

        <section className="horizontal">
          <div className="pin-wrap">
            <div className="animation-wrap to-left">
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
                ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
                dignissimos sunt ipsum repellendus totam optio distinctio.
                Laborum suscipit quia aperiam.
              </div>
              <div className="item">
                Animi, porro molestias? Reiciendis dolor aspernatur ab quos
                nulla impedit, dolores ullam hic commodi nobis nam. Dolorem
                expedita laudantium dignissimos nobis a. Dolorem, unde quidem.
                Tempora et a quibusdam inventore!
              </div>
              <div className="item">
                Labore, unde amet! Alias delectus hic laboriosam et dolorum?
                Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
                nostrum, tempore modi quo praesentium aspernatur vero dolor,
                ipsa unde perspiciatis minima.
              </div>
              <div className="item">
                Quaerat error dolorem aspernatur magni dicta ut consequuntur
                maxime tempore. Animi odio eos quod culpa nulla consectetur?
                Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
                voluptate laboriosam, officiis at ea!
              </div>
              <div className="item">
                Rem nobis facere provident magni minima iste commodi aliquam
                harum? Facere error quos cumque perspiciatis voluptatibus
                deserunt maiores, fugiat sunt sit ab inventore natus saepe,
                eveniet alias ipsam placeat voluptas!
              </div>
              <div className="item">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus, temporibus esse magni illum eos natus ipsum
                minus? Quis excepturi voluptates atque dolorum minus eligendi!
                Omnis minima magni recusandae ex dignissimos.
              </div>
              <div className="item">
                Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
                sed dicta reiciendis, excepturi nisi perferendis, accusantium
                est suscipit tempora dolorum praesentium cupiditate doloribus
                non? Sint numquam recusandae dolore quis esse ea?
              </div>
              <div className="item">
                Temporibus cum dolor minima consequatur esse veritatis enim nemo
                cupiditate laborum doloribus reiciendis perferendis, quas fugit
                earum rerum, at beatae alias amet aspernatur dolorem dolore
                error commodi. Perspiciatis, reiciendis amet!
              </div>
              <div className="item">
                Vitae, tenetur beatae error corrupti odit expedita quisquam
                commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
                similique maiores praesentium quam! Optio tenetur saepe unde
                voluptatem minus tempora maxime temporibus ducimus ullam!
              </div>
            </div>
          </div>
        </section>

        <section className="blank">
          <h1>...what do you think?</h1>
          <p>...</p>
        </section> */}
      </div>
    </>
  );
}
