
// import React,{ useState } from 'react';
// import './webside.css';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const NextArrow = ({ className, style, onClick }) => (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black",
//         right: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     />
//   );
  
//   const PrevArrow = ({ className, style, onClick }) => (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black",
//         left: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     />
//   );
// const Webside = () => {
//     const [isSignInClicked, setIsSignInClicked] = useState(false);
//     const settings = {
//         dots: true, // Shows navigation dots below the slider
//         infinite: true, // Enables infinite scrolling
//         // speed: 500, // Animation speed (ms)
//         slidesToShow: 5, // Number of slides to show at once
//         slidesToScroll: 2, // Number of slides to scroll at once
//         // autoplay: true, // Enables auto-playing slides
//         autoplaySpeed: 2000, // Delay between each auto-playing slide (ms)
//         pauseOnHover: true, // Pauses auto-play when hovering over a slide
//         arrows: true, // Shows navigation arrows
//         centerMode: true, // Centers the active slide
//         centerPadding: "10px", // Adds padding around centered slides
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//       };
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <>
//                 {isSignInClicked ? (
//                     <h2>Sign up</h2>
                    
//                 ) : (
//                 <nav className='navbar navbar-expand-lg navbar-light bg-light s-15'>
//                     <div class="container-fluid">
//                         <a className='navbar-brand'>
//                             <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAYFBMVEX////zgCjydgDzeRDzexrzfiPydAD5wqPzehX5x6zzhDLzgi3xbQD86d70kk/728n2pXT85dj++PT60Lj84NH+9O74u5j3sYb3q331mmD71sL0jUf1n2nziT33tI35y7BamFtCAAADc0lEQVR4nO2a25KDIAxAKRBEa7Veq7a2//+XW3fd1guyujMNPuS87exDzyCBJIQxgiAIgiAIgiAIgiAIgiAIYqckWXmpqkv5yFPXKiNOzRlCpYSWUgulwqBqTq6deppzoDQcBoDmbZW79mIszY5cjsx6P6mCxvH3zWtlMOv9eJ04VEsrIZfUOqS+O1u8JOI2tQ5VO4qMWFqXrV+8g5PA8MXibhvvvAzfLVvn1sVtg++2Tq2zU8hf9gQr1+3bri0w3dJgRSy8kS2m3EVvcXueKB6eW6y2uT3B23atbcMZ/6dvWG4PS6QCtEeTHlbEFpFl4cBnxdWUpdQ4crHlRoXgeZeejaGMs3SR5RhZlhN3DLc0XHazyEGLkT09bHmS5bOGGJmn+af/lhPl592ssWqTg+jzcif7CWyRCz6/6WL7lb8sdzh8PmPP7PeqRU5//qSzBuuiHEitLh93Y94KOf7elgBScKWjm4eRcK6QyyMZ9nC41hcvzguc+tX/W84dKwLCHbE9Qz+6bI+wJLDKwc0b4ftZjLeYxlRygBQjtJRwbOsYqaFTb6hYf5dTqitOrrm1LPxBtygft9leF3ZwlNLVmglblq7CkLNXra7lyj/7mSYwEuEnyfru11AOp4doT9SXOCKV/Pd/HCZwRTqG//NdkeKB/SteFVpj+LH9HBZYbqwIti6dPqPJsXJrSIgYT+60ceUgwuyn37fdEkjXQ09h7K0uEuI+Hm54wXkuHNoh11OGrwdq+GVJDtCrnkd0+BE6DgFDn0QiniN2DI0S4bRcHDJ/pNBIXf4V+FM5kA6bAOkpb7KsaZLULCcQWl9GTn6t+W/9zAPPIAcB6mPrm1yr4faHMJ7LYb5mjphmnSqbyUmsDHjO5KXJJIc+ffBiUv3P5TDzuCnpbbR0XS4+kgPpctYqtstx36EbY9XQRcXjG8L1pVoMh+e6nHLYIQsdHXEvRomdrKPBn+Lh2I2xUUwMB8PwJiKWSbk5yYSD64/asTDJ4WI0zcDZVMVqV8nIhFTPP6yM9jLKPH9yArWXKWZD+1/vY8N9k07Gqzh2oWolGW07iTAIsYVycJ6A23dNA/V72/EdzMyPeTcUcR6SttH016qzUtCK933aif3U9yNq0U3d7i0Yeoor7C9QXyRhiNiY3kq2o1uLIAiCIAiCIAiCIIhd8gVYTyjTB+eo7wAAAABJRU5ErkJggg==' alt='swiggy' style={{ height: 50 }}></img>
//                         </a>

//                         <ul className='navbar-nav ms-auto'>
//                             <li className='nav-item'>
//                                 <a className='nav-link' href='#'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="19">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
//                                     </svg>

//                                     swiggy corporate</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a className='nav-link' href='#'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="19" height="18">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" style={{}} />
//                                     </svg>

//                                     search</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a className='nav-link' href='#'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="20">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                                     </svg>


//                                     offers</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a className='nav-link' href='#'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="19">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
//                                     </svg>

//                                     help</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a className='nav-link' href='#'onClick={() => setIsSignInClicked(true)}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" height="18" width="19">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                                     </svg>
//                                     sign in</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a className='nav-link' data-bs-toggle="collapse" href="#collapseExample" aria-controls="collapseExample">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" height="19" width="19">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
//                                     </svg>


//                                     card</a>

//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 )}
//                 </>
//                 {/* <div className="flex-container"> */}
//                     {/* <div className='d-flex flex-direction-row flex-wrap p-2 justify-content-center align-items-center' > */}


//                         {/* <div>
//                             <img class="sc-koXPp jheTCm" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" width="144" height="180" alt="restaurants curated for biryani"></img>
//                         </div>

//                         <div>

//                             <img class="sc-koXPp jheTCm" src="https://www.gitsfood.com/wp-content/uploads/2021/04/04-33.jpg" width="144" height="180"></img>


//                         </div>
//                         <div height="180" width="144" class="">
//                             <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" width="144" height="180" alt="restaurants curated for ">
//                             </img>
//                         </div>
//                         <div>
//                             <img src='https://media.istockphoto.com/id/2153003107/photo/parotta-or-paratha-famous-and-popular-dish-of-kerala-tamilnadu-srilanka-fluffy-layered.jpg?s=612x612&w=0&k=20&c=bNEz7EeU50-e_DrwQr70Bw85GlgT-2wQF-y5xYN4pyc=' width="144" height="180" ></img>
//                         </div>
//                         <div>
//                             <img src='https://t4.ftcdn.net/jpg/09/09/11/75/240_F_909117502_H6RnL8e3PUFsDuJI0S7r6X5KN5TMPzSp.jpg' width="144" height="180"></img>

//                         </div>
//                         <div>
//                             <img src='https://www.shutterstock.com/image-photo/white-cup-black-coffee-isolated-600nw-1183800493.jpg' width="144" height="180">
//                             </img>
//                         </div>
//                         <div>
//                             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkK4VfSxTpE5fUg-kBeJV78ib0cn7zkiNsA&s' width="144" height="180">
//                             </img>
//                         </div> */}
//                           <div className="app">
//       <Slider {...settings}>
//         <div>
//           <img src='https://www.gitsfood.com/wp-content/uploads/2021/04/04-33.jpg'width="144" height="180">
//           </img>
//         </div>
//         <div>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkK4VfSxTpE5fUg-kBeJV78ib0cn7zkiNsA&s' width="144" height="180">
//         </img>
//         </div>
//         <div>
//         <img src='https://www.shutterstock.com/image-photo/white-cup-black-coffee-isolated-600nw-1183800493.jpg' width="144" height="180">
//         </img>
//         </div>
//         <div>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm5FOaS9RlKjGWNnbQ453oxNEIHYZvLDG7w&s' width="144" height="180"></img>
//         </div>
//         <div>
//         <img src='https://media.istockphoto.com/id/2153003107/photo/parotta-or-paratha-famous-and-popular-dish-of-kerala-tamilnadu-srilanka-fluffy-layered.jpg?s=612x612&w=0&k=20&c=bNEz7EeU50-e_DrwQr70Bw85GlgT-2wQF-y5xYN4pyc=' width="144" height="180" ></img>
//         </div>
//         <div>
//         <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" width="144" height="180" alt="restaurants curated for ">
//         </img>
//         </div>
//         <div>
//             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbwkNRngxF17bzi1q-hgbwQMgU0njDp5rQg&s'width="144" height="180">
//             </img>
//         </div>
//         <div >
//                 <img src='https://caspian.pizza/wp-content/uploads/2022/07/pizza.png'width="144" height="180">
//                 </img>
//         </div>
//         <div>
//             <img src='https://pastrypalace.co.in/wp-content/uploads/2021/05/celebration-cake-65-600x600-1.jpg'width="144" height="180"></img>
//         </div>
//         <div>
//             <img src='https://m.media-amazon.com/images/I/61FCTxz+uAL._AC_UF894,1000_QL80_.jpg'width="144" height="180"></img>
//         </div>
//         <div>
//         <img src='data:image/jpeg;base64,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'width="144" height="180"></img>
//         </div>
//         <div>
//             <img src='https://5.imimg.com/data5/OW/WE/MY-30494656/amul-realmilk-ice-cream.jpg'width="144" height="180"></img>
//         </div>
//         <div>
//             <img src='https://www.haighschocolates.com.au/media/catalog/product/p/l/plu_617_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'width="144" height="180"></img>
//         </div>
//       </Slider>
//     </div>
//                     {/* </div> */}
//                 {/* </div> */}
//                 <div><hr className=''></hr></div>
               
//                 <div className='container justify-content-center align-items-center'>
//                     <h2>Restaurants with online food delivery in Chhindwara</h2>
//                     <div className='row'>
//                         <div>

                
//                             {/* </button> */}
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px"  }}>Sort By </button>
//                                       <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px" }}>Filter </button>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="18">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
//                                 </svg>      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="16">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//                                 </svg>
//                             {/* </button> */}
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Ratings 4.0+</button>
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Pure Veg</button>
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Offers</button>
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Rs. 300-Rs.600</button>
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Less Than Rs. 300</button>
//                             <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Dark color</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='d-flex flex-direction-row flex-wrap justify-content-center align-items-center '>
//                     <div className=' p-3' style={{paddingRight:"50px"}}>
//                         <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f" alt="Indian Coffee House" width="240px" height="140px" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'> Indian Coffee House</h4>
//                         <p>4.5<span className='bold'>. 45-50m mins</span></p>
//                         <p>South Indian North Indian,..<br></br>
//                             khajri Chowk
//                         </p>

//                     </div>
//                     <div className='p-3'>
//                         <img src=' https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v5e3atn9tmtgcca1onnr' alt='Fresh Meal' width="240" height="140" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'>Fresh Meal's</h4>
//                         <p>4.4<span className='' style={{ fontFamily: "" }}>60-65 mins</span></p>
//                         <p>north Indian south Indian,..</p>
//                         <p> Chhindwara City</p>


//                     </div>
//                     <div className='p-3'>
//                         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg" alt="Paras Mishthan" width="240" height="140" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'>Blue Chilli Restaurant</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,..</p>
//                         <p>  Chennai City
//                         </p>
//                     </div>
//                     <div className='p-3'>
//                         <img class="sc-koXPp fKIURO" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/mtr8w6msayubnigqmbkn" alt="Deccan Dosa" width="240" height="140" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'>Deccan Dosa</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,..  </p>
//                         <p> thambaram City</p>

//                     </div>
//                     <div className='p-3'>
//                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s' width="240" height="140" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'> Pizza Boost</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,..</p>
//                         <p> madurai City</p>
//                     </div>
//                     <div className='p-3'>
//                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ppApMTuD6joZp2vdAlI36m831LH_Afpfkg&s' width="240" height="140" style={{ borderRadius: 20 }} ></img>
//                         <h4 className='p-2'>Fresh Meal's</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,..</p>
//                         <p> coimbatore City</p>

//                     </div>
//                     <div className='p-3'>
//                         <img src='https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8.jpg' width="240" height="140" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'>Rich Table Restaurant</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,..</p>
//                         <p> salem City</p>

//                     </div>
//                     <div className='p-3'>
//                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oGyi4VTew7nLH5NmL_V_psS04MtdpyDMzS_MrMmHUpUiip5pGkjbkeeWrf_E7DH2hQw&usqp=CAU' width="240" height="140" style={{ borderRadius: 20 }}></img>
//                         <h4 className='p-2'>Chai Chawni Cafe</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,.. </p>
//                         <p> trichy City</p>

//                     </div>
//                     <div className='p-3'>
//                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6EHnGtmIpfFTWI8m0MsygM406RCmR69itg&s' width="240" height="140" style={{ borderRadius: 20 }} ></img>
//                         <h4 className='p-2'> Ice Cream Desserts</h4>
//                         <p>4.4<span>60-65 mins</span></p>
//                         <p>north Indian south Indian,.. </p>
//                         <p>Chhindwara City</p>

//                     </div>
//                     <div>
//                         <img src=''></img>
//                     </div>

//                 </div>
//                 <hr></hr>

//                 <div className='d-flex  flex-wrap'>
//                     <div className='row'>
//                         <h2>Best Place To Eat Acros Cities</h2>
//                         <div className='col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>

//                             </div>
//                         </div>

//                         <div className='col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>

//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div className='d-flex  flex-wrap mt-5' >
//                     <div className='row'>
//                         <h2>Best Cuisines Near Me</h2>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>chinesse restaurants near me</p>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//                 <div className='d-flex  flex-wrap mt-5 mb-5'>
//                     <div className='row'>
//                         <h2>Explore Every Restaurants Near Me</h2>
//                         <div className=' col-md-6 p-2'>
//                             <div className='card p-2 'style={{ borderRadius: "15px" }}>
//                                 <p>Explorerestaurants near me</p>
//                             </div>
//                         </div>
//                         <div className=' col-md-6 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "15px" }}>
//                                 <p>Explore Top Rated restaurants near me</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <nav className='navbar navbar-expand-lg navbar-light mt-3 w-100' style={{color:"#FOFOF5"}}>
//                     <h3 className=''style={{fontSize:"24px"}}>For Better Experience,download the swigy app now</h3>
//                     <button className='bg-dark text-white p-2 ' style={{ borderRadius: "10px",marginLeft:"70px" }}>
//                         <img src='data:image/webp;base64,UklGRgoFAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOYBAAARkIRt21lHX92Obdv2LD1JTu12N97atm1rZdtcnVnb9swxmryrJP///dfVdURMAFUea+Rt3FDSSKGpXwBYn+YmKZKyF7avy6up0PkaHEYvDk5iV+UBnMcP90hkNiTsAvi8oiGvAgh8M76GYgjdHJnGyBQB+LZ0TeeSLwh4PqcplwpRqPCWNarKodAUBvw5Mboqg3wZqPAdH1QlQVaeFCD0cllbWfmSgPDzSXXl5EoDfDfz02XkMID1e3fvDAkWA8B6Nr+ZsCweQPTp2MYZSsH6e07PEJLJBqgIHBtUJcGdx+QDRN6sbucuy+IExJ5NquNGZwb47hSmOzPA//+u1lWdjFEAFRcGJzgwVEDsfE5VtRC601ExfNbsdEX+TlDM/ONAU8P66rHTlTD9jzvbjVHBit8qrWKnqYCHw1LJ3lAgeKl3BjnU2UUejq9Djj3MKj4ubpacoNCPff0Sya3GKXBmaNUkcq3zMR/nVCGRmWzeTa5DYnUm/9fUI9EGC/PWkARSyTuGZOryAtOrkEqxjXVIskfStS4kXc7dQcQw2xLnG0cssyF8NjE1RJ1oSFw1MU86Et9RIoLjiXMXd+ElxDvd6+ZUS+Le+oqjq71JwSpb7T4WkKJT/lqA+WM2qdsge+5coxFVvgFWUDgg/gIAAPASAJ0BKkAAQAA+MQ6MRiIREQoAIAMEtgBcyu0/APyA7SjInOfxc5lXaftf+wv+OzBfh3+Yflj/K/n1/Vf8BzmX9V+0bhAfsB/sfbP6QD+n/7n0a/Yb9ADypP2G+B79sP9V/lfaXcrxuVt9/6qmtJYu++JgFQhZSnwsX5NEgd6BdhaFOCcLmzgYgTp353hTdS/rNU+Sxv/nDq0bxmJbcuwA7Q8W+a7DWiB015zGP9roMi8tlsrzvHvCp7ReEA0vULrJUk8Q7H30MoMyRfDyl51//t5j5S/GOW6O/rIPN04e/q1/bs9MagtZhxIMhkwqc//+pukDa0Lciig4si5J4XFGy/4UupNpwqRDRiQYJZ8l0blVLhZNKagWmt2LD6AX3/Y3swco/y3jOOG9Ufvqen/MRFC/B9FXwFC6IQuarLQnJVN0GHmoW4zO9ftZuszn/1d8aKgUBdfAZIvrEP82/ZZ955CpqE918pg0OziZuJh/M3AuGKKXUwGl1G3c7CprrRkHTF9eskhS6pPrCyvwHxOzw793wJr41T+E5LgLO+lmY1UdOuxkKJhT9JR/RUfPz7M8FOk2XGbu/hImVL4M2o/35TflIGW/iazBSz//nwZ6gHZlNyRcpiBOsmRmMPhpiTY5Xl7ygfmxzk/jEkiVyJ1mU+DoNJIWp7gG1Z0iSh2AOMoEA1LEAO4TP+yeMGp5w0eVeUCIbEnUQHotcLDMmAxx3IWdISXF14wiLtSAOVdStDAnC7q8aG0gWpF2AD213CpyG06WLldyX2HXqiVX7bhC/TfK5lPe7y5Tb7PtBTLkeIa6zaw1v30yBfxsekG4lqtq1ZX7SMKidV4HQINsTG5Nkc5IMaFBchAOJy67VUW+UoOwP/pqkqq1PgmP27deh3YSVUCHWa2SSBfEK7ie0jisLbZVPs5BB38+B/elUwXGvJyZr+CpL1xrfb3Xh/C7q8aG0gV46cri8duzNIU3wWP8hQG7OYm73oiP2GgM+ngzWdHgkEwTqn+VkqIAAAA='width="20" height="20"></img>
                        
//                         Goole Pay </button>
//                     <button className='bg-dark text-white p-2'style={{ borderRadius: "10px",marginLeft:"150px" }}> 
//                     <img src='data:image/webp;base64,UklGRjQFAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOcBAAARkKxt21k777ZV27bdDm3bNmYd2e3YtnEAtm3bdpN0rW/z/5PvPYGImAAEGZVaoGiR/BnJCWCMLdlzwc7zdx+/fv3yycUDS/qV0hXTaPF5T2xvLmoaqSVtyNGf4uv/U8PiNWSMvR0S/59NTQ6s47WQBHujTTBFtzoSuLuxSAC1z4jKC/V86/xalH7p6NOQ76LWHejLaFE93Icerq5wZ6vaP0X591oW+a6K+ptpZmuEcLlRW2EMtzFIvkch11PyGiOko/Io9IzlUb7cRgvt8FxiT/Ocis1Rz+WRujnmCPEsADHXmM5FAOU9pj8VgH5C3RtYzDUPOMC1A7jGda4gXnDdqZH2nutR/bRPZA1SP7PFfyCrHfWS63Y1XOM6UwAHuDYDi7lmAYO4ugHl/jG5ZYGIK0y3owDMZJoLAPUdogY54k7xnIjIgTE8g5FrwacsD+NywwyWicgz3zWOewl5oU2IwesI000MG2Fc5Jy+q+lmaPBd2++qsO3lKmsH+9GeqlHwc+QfRcPgb9e3Wv70hN81z+q4XgP+F1vvBOetzIdAW98K6kZ7BJ1v2uOwf+FH01OgsPCIY3/9cQ6NyoDS1EYLr7s2zvVFrZKgOabKwMUHLz95+/HT22eX9i4bUSkGlPkSCqXGJyJYAFZQOCAmAwAA0BAAnQEqQABAAD4xEIxGIhERCIAgAwS0gGT69haI/9P7V/8r+MlkR/neEG2AdrZb19jXO3pLJnfjl9tPcD/VL/Zdfv9ivRVP4AQf1lIT5Vbu56Tvt1RuNXYJ0zBgHiX5v7HRCoc0ILjkRbJq0u0bYlmWSmS42PwAiu0SrDSoSspQThIxhUvtW9Hf3khrxgAA/upC4K47nNFlDz5XcqZKTPBhsEwc8fS5s9bVrqShFxF/KRU3mHQqdHQTjqEnGNr0lll76JPGAPTiF9iwbNAcHJ0Jnj/z+pr7NLWh4ALoTnUfV3LuYazC1gmP/vV/+vfZR2BV0AtNoO738+fjZ4sCnu3//CmYkPV/zknYfmqfq/M6WrE9si7O50j+mxaJyBO4zJ7NEltKbu1LJh6R0SlssdTpzolasMq2T9ohCE91oZs0hqoR1V7+Pu4IzOLFooRPWb9Vjr7+LfP/yK9wskcSwsw/i39u91a5ER3LUw+oCU/d+MmSUlrHQlEE1gvvedero9LgcfLJRmqv/rrjExlNj64HWv99/ReW+jo/OONvupLaBmMull+1ic2gekZevPehCWNuQVGTGr3AoZvXWEa6P+/xsv9oqDb1df/Imy9kW3Md/6CLZl/uRT+kAf/9YyCYlD3bSnlbdPoeUreB6rXz2V9tCk96MJPr0mavnNkt2obRFVEgZkbsaww7JRPp0vo5BESLpreX1dj6491fAuga2E3K3tt1usWQ38Esqd/+9LVlsPZnHWz95wPkb6hQzhWDV/meP8LdXxkN6+OaqxtzPPsfZr/6P4l9PVK5jYcEhtmafm4u8eGGQpPa4WKoJ7sQn4NeyfdKqdtDV4Gyh6m/PCRdomDMt6Z541RB03JGrlsC2SajmUn/q/kvnim/2tiLDC7r737y470K2+MiLNWrtCdqrLALkRa8SPviGJVsmNP6CA2hRkPDfOsThVEqqKiA8ijqzF8ApFSwpzHn0hjIV2JSSHx5U3oGvLoCRIqpIrN3g+x1oK/+vKq08OvJ24qCAO+CdBGRRDl3j02IrV4gDceK0vaE4wX8E6sAbNRFF/JhQpsAAAA='width="19"height="20"></img>
//                         App Store</button>

//                 </nav>
//                 <div className='d-flex  flex-wrap'>
//                     <div className='row bg-dark text-white p-2 w-100'>
//                         <div className='col-md-3'>
//                             <h1>swigy</h1>
//                             <p>2024 Bundl Technologies Pvt. Ltd</p>

//                         </div>
//                         <div className='col-md-3'>
//                             <h6 className=''>Company</h6>
//                             <div style={{color:"#FFFFFF99"}}>
//                             <p >Abour</p>
//                             <p>Careers</p>
//                             <p>Team</p>
//                             <p>Swiggy One</p>
//                             <p>Swiggy Instamart</p>
//                             <p>Swiggy Genie</p>
//                             </div>

//                         </div>
//                         <div className='col-md-3 mb-5'>
//                             <h6>Contact us</h6>
//                             <div style={{color:"#FFFFFF99"}}>
//                             <p>Help & Support</p>
//                             <p>Partner With us</p>
//                             <p>Ride with us</p>
//                             </div>
//                             <h6 className='mt-4'>Legal</h6>
//                             <div style={{color:"#FFFFFF99"}}>
//                             <p>Terms & Conitions</p>
//                             <p>Cookie Policy</p>
//                             <p>Privacy Policy</p>
//                             <p>Investar Relations</p>
//                             </div>

//                         </div>
//                         <div className='col-md-3'>
//                             <h6>We deliver to</h6>
//                             <div style={{color:"#FFFFFF99"}}>
//                             <p>Bangalore</p>
//                             <p>Gurgaon</p>
//                             <p>hyderbad</p>
//                             <p>Delhi</p>
//                             <p>Mumbai</p>
//                             <p>Pune</p>
//                             <button className='bg-dark text-white'>589 cities</button>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//                 <div className="app">
//       <Slider {...settings}>
//         <div>
//           <img src='https://www.gitsfood.com/wp-content/uploads/2021/04/04-33.jpg'width="144" height="180">
//           </img>
//         </div>
//         <div>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkK4VfSxTpE5fUg-kBeJV78ib0cn7zkiNsA&s' width="144" height="180">
//         </img>
//         </div>
//         <div>
//         <img src='https://www.shutterstock.com/image-photo/white-cup-black-coffee-isolated-600nw-1183800493.jpg' width="144" height="180">
//         </img>
//         </div>
//         <div>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm5FOaS9RlKjGWNnbQ453oxNEIHYZvLDG7w&s' width="144" height="180"></img>
//         </div>
//         <div>
//         <img src='https://media.istockphoto.com/id/2153003107/photo/parotta-or-paratha-famous-and-popular-dish-of-kerala-tamilnadu-srilanka-fluffy-layered.jpg?s=612x612&w=0&k=20&c=bNEz7EeU50-e_DrwQr70Bw85GlgT-2wQF-y5xYN4pyc=' width="144" height="180" ></img>
//         </div>
//         <div>
//         <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" width="144" height="180" alt="restaurants curated for ">
//         </img>
//         </div>
//         <div>
//             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbwkNRngxF17bzi1q-hgbwQMgU0njDp5rQg&s'width="144" height="180">
//             </img>
//         </div>
//         <div >
//                 <img src='https://caspian.pizza/wp-content/uploads/2022/07/pizza.png'width="144" height="180">
//                 </img>
//         </div>
//         <div>
//             <img src='https://pastrypalace.co.in/wp-content/uploads/2021/05/celebration-cake-65-600x600-1.jpg'width="144" height="180"></img>
//         </div>
//         <div>
//             <img src='https://m.media-amazon.com/images/I/61FCTxz+uAL._AC_UF894,1000_QL80_.jpg'width="144" height="180"></img>
//         </div>
//         <div>
        <img src='data:image/jpeg;base64,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'width="144" height="180"></img>
//         </div>
//         <div>
//             <img src='https://5.imimg.com/data5/OW/WE/MY-30494656/amul-realmilk-ice-cream.jpg'width="144" height="180"></img>
//         </div>
//         <div>
//             <img src='https://www.haighschocolates.com.au/media/catalog/product/p/l/plu_617_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'width="144" height="180"></img>
//         </div>
//       </Slider>
//     </div>
//   {/* ); */}
//         </div>
//         </div>
//     )
// }
// export default Webside;






import React,{ useState } from 'react';
import './webside.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        right: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
  
  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
const Webside = () => {
    const [isSignInClicked, setIsSignInClicked] = useState(false);
    const settings = {
        dots: true, // Shows navigation dots below the slider
        infinite: true, // Enables infinite scrolling
        // speed: 500, // Animation speed (ms)
        slidesToShow: 5, // Number of slides to show at once
        slidesToScroll: 2, // Number of slides to scroll at once
        // autoplay: true, // Enables auto-playing slides
        autoplaySpeed: 2000, // Delay between each auto-playing slide (ms)
        pauseOnHover: true, // Pauses auto-play when hovering over a slide
        arrows: true, // Shows navigation arrows
        centerMode: true, // Centers the active slide
        centerPadding: "10px", // Adds padding around centered slides
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return (
        <div className='container'>
            <div className='row'>
                <>
                {isSignInClicked ? (
                    <h2>Sign up</h2>
                    
                ) : (
                <nav className='navbar navbar-expand-lg navbar-light bg-light s-15'>
                    <div class="container-fluid">
                        <a className='navbar-brand'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAYFBMVEX////zgCjydgDzeRDzexrzfiPydAD5wqPzehX5x6zzhDLzgi3xbQD86d70kk/728n2pXT85dj++PT60Lj84NH+9O74u5j3sYb3q331mmD71sL0jUf1n2nziT33tI35y7BamFtCAAADc0lEQVR4nO2a25KDIAxAKRBEa7Veq7a2//+XW3fd1guyujMNPuS87exDzyCBJIQxgiAIgiAIgiAIgiAIgiAIYqckWXmpqkv5yFPXKiNOzRlCpYSWUgulwqBqTq6deppzoDQcBoDmbZW79mIszY5cjsx6P6mCxvH3zWtlMOv9eJ04VEsrIZfUOqS+O1u8JOI2tQ5VO4qMWFqXrV+8g5PA8MXibhvvvAzfLVvn1sVtg++2Tq2zU8hf9gQr1+3bri0w3dJgRSy8kS2m3EVvcXueKB6eW6y2uT3B23atbcMZ/6dvWG4PS6QCtEeTHlbEFpFl4cBnxdWUpdQ4crHlRoXgeZeejaGMs3SR5RhZlhN3DLc0XHazyEGLkT09bHmS5bOGGJmn+af/lhPl592ssWqTg+jzcif7CWyRCz6/6WL7lb8sdzh8PmPP7PeqRU5//qSzBuuiHEitLh93Y94KOf7elgBScKWjm4eRcK6QyyMZ9nC41hcvzguc+tX/W84dKwLCHbE9Qz+6bI+wJLDKwc0b4ftZjLeYxlRygBQjtJRwbOsYqaFTb6hYf5dTqitOrrm1LPxBtygft9leF3ZwlNLVmglblq7CkLNXra7lyj/7mSYwEuEnyfru11AOp4doT9SXOCKV/Pd/HCZwRTqG//NdkeKB/SteFVpj+LH9HBZYbqwIti6dPqPJsXJrSIgYT+60ceUgwuyn37fdEkjXQ09h7K0uEuI+Hm54wXkuHNoh11OGrwdq+GVJDtCrnkd0+BE6DgFDn0QiniN2DI0S4bRcHDJ/pNBIXf4V+FM5kA6bAOkpb7KsaZLULCcQWl9GTn6t+W/9zAPPIAcB6mPrm1yr4faHMJ7LYb5mjphmnSqbyUmsDHjO5KXJJIc+ffBiUv3P5TDzuCnpbbR0XS4+kgPpctYqtstx36EbY9XQRcXjG8L1pVoMh+e6nHLYIQsdHXEvRomdrKPBn+Lh2I2xUUwMB8PwJiKWSbk5yYSD64/asTDJ4WI0zcDZVMVqV8nIhFTPP6yM9jLKPH9yArWXKWZD+1/vY8N9k07Gqzh2oWolGW07iTAIsYVycJ6A23dNA/V72/EdzMyPeTcUcR6SttH016qzUtCK933aif3U9yNq0U3d7i0Yeoor7C9QXyRhiNiY3kq2o1uLIAiCIAiCIAiCIIhd8gVYTyjTB+eo7wAAAABJRU5ErkJggg==' alt='swiggy' style={{ height: 50 }}></img>
                        </a>

                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="19">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg>

                                    swiggy corporate</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="19" height="18">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" style={{}} />
                                    </svg>

                                    search</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="20">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>


                                    offers</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="19">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                                    </svg>

                                    help</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'onClick={() => setIsSignInClicked(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" height="18" width="19">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    sign in</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' data-bs-toggle="collapse" href="#collapseExample" aria-controls="collapseExample">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" height="19" width="19">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                                    </svg>


                                    card</a>

                            </li>
                        </ul>
                    </div>
                </nav>
                )}
                </>
                {/* <div className="flex-container"> */}
                    {/* <div className='d-flex flex-direction-row flex-wrap p-2 justify-content-center align-items-center' > */}


                        {/* <div>
                            <img class="sc-koXPp jheTCm" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" width="144" height="180" alt="restaurants curated for biryani"></img>
                        </div>

                        <div>

                            <img class="sc-koXPp jheTCm" src="https://www.gitsfood.com/wp-content/uploads/2021/04/04-33.jpg" width="144" height="180"></img>


                        </div>
                        <div height="180" width="144" class="">
                            <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" width="144" height="180" alt="restaurants curated for ">
                            </img>
                        </div>
                        <div>
                            <img src='https://media.istockphoto.com/id/2153003107/photo/parotta-or-paratha-famous-and-popular-dish-of-kerala-tamilnadu-srilanka-fluffy-layered.jpg?s=612x612&w=0&k=20&c=bNEz7EeU50-e_DrwQr70Bw85GlgT-2wQF-y5xYN4pyc=' width="144" height="180" ></img>
                        </div>
                        <div>
                            <img src='https://t4.ftcdn.net/jpg/09/09/11/75/240_F_909117502_H6RnL8e3PUFsDuJI0S7r6X5KN5TMPzSp.jpg' width="144" height="180"></img>

                        </div>
                        <div>
                            <img src='https://www.shutterstock.com/image-photo/white-cup-black-coffee-isolated-600nw-1183800493.jpg' width="144" height="180">
                            </img>
                        </div>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkK4VfSxTpE5fUg-kBeJV78ib0cn7zkiNsA&s' width="144" height="180">
                            </img>
                        </div> */}
                          <div className="app">
      <Slider {...settings}>
        <div>
          <img src='https://www.gitsfood.com/wp-content/uploads/2021/04/04-33.jpg'width="144" height="180">
          </img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkK4VfSxTpE5fUg-kBeJV78ib0cn7zkiNsA&s' width="144" height="180">
        </img>
        </div>
        <div>
        <img src='https://www.shutterstock.com/image-photo/white-cup-black-coffee-isolated-600nw-1183800493.jpg' width="144" height="180">
        </img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm5FOaS9RlKjGWNnbQ453oxNEIHYZvLDG7w&s' width="144" height="180"></img>
        </div>
        <div>
        <img src='https://media.istockphoto.com/id/2153003107/photo/parotta-or-paratha-famous-and-popular-dish-of-kerala-tamilnadu-srilanka-fluffy-layered.jpg?s=612x612&w=0&k=20&c=bNEz7EeU50-e_DrwQr70Bw85GlgT-2wQF-y5xYN4pyc=' width="144" height="180" ></img>
        </div>
        <div>
        <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" width="144" height="180" alt="restaurants curated for ">
        </img>
        </div>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbwkNRngxF17bzi1q-hgbwQMgU0njDp5rQg&s'width="144" height="180">
            </img>
        </div>
        <div >
                <img src='https://caspian.pizza/wp-content/uploads/2022/07/pizza.png'width="144" height="180">
                </img>
        </div>
        <div>
            <img src='https://pastrypalace.co.in/wp-content/uploads/2021/05/celebration-cake-65-600x600-1.jpg'width="144" height="180"></img>
        </div>
        <div>
            <img src='https://m.media-amazon.com/images/I/61FCTxz+uAL._AC_UF894,1000_QL80_.jpg'width="144" height="180"></img>
        </div>
        <div>
        <img src='data:image/jpeg;base64,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'width="144" height="180"></img>
        </div>
        <div>
            <img src='https://5.imimg.com/data5/OW/WE/MY-30494656/amul-realmilk-ice-cream.jpg'width="144" height="180"></img>
        </div>
        <div>
            <img src='https://www.haighschocolates.com.au/media/catalog/product/p/l/plu_617_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'width="144" height="180"></img>
        </div>
      </Slider>
    </div>
                    {/* </div> */}
                {/* </div> */}
                <div><hr className=''></hr></div>
               
                <div className='container justify-content-center align-items-center'>
                    <h2>Restaurants with online food delivery in Chhindwara</h2>
                    <div className='row'>
                        <div>

                
                            {/* </button> */}
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px"  }}>Sort By </button>
                                      <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px" }}>Filter </button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="18">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="16">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            {/* </button> */}
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Ratings 4.0+</button>
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Pure Veg</button>
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Offers</button>
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Rs. 300-Rs.600</button>
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Less Than Rs. 300</button>
                            <button type="button" class="btn btn-outline-dark" style={{ borderRadius: "50px",marginLeft:"10px" }}>Dark color</button>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-direction-row flex-wrap justify-content-center align-items-center '>
                    <div className=' p-3' style={{paddingRight:"50px"}}>
                        <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f" alt="Indian Coffee House" width="240px" height="140px" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'> Indian Coffee House</h4>
                        <p>4.5<span className='bold'>. 45-50m mins</span></p>
                        <p>South Indian North Indian,..<br></br>
                            khajri Chowk
                        </p>

                    </div>
                    <div className='p-3'>
                        <img src=' https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v5e3atn9tmtgcca1onnr' alt='Fresh Meal' width="240" height="140" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'>Fresh Meal's</h4>
                        <p>4.4<span className='' style={{ fontFamily: "" }}>60-65 mins</span></p>
                        <p>north Indian south Indian,..</p>
                        <p> Chhindwara City</p>


                    </div>
                    <div className='p-3'>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg" alt="Paras Mishthan" width="240" height="140" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'>Blue Chilli Restaurant</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,..</p>
                        <p>  Chennai City
                        </p>
                    </div>
                    <div className='p-3'>
                        <img class="sc-koXPp fKIURO" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/mtr8w6msayubnigqmbkn" alt="Deccan Dosa" width="240" height="140" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'>Deccan Dosa</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,..  </p>
                        <p> thambaram City</p>

                    </div>
                    <div className='p-3'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s' width="240" height="140" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'> Pizza Boost</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,..</p>
                        <p> madurai City</p>
                    </div>
                    <div className='p-3'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ppApMTuD6joZp2vdAlI36m831LH_Afpfkg&s' width="240" height="140" style={{ borderRadius: 20 }} ></img>
                        <h4 className='p-2'>Fresh Meal's</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,..</p>
                        <p> coimbatore City</p>

                    </div>
                    <div className='p-3'>
                        <img src='https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8.jpg' width="240" height="140" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'>Rich Table Restaurant</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,..</p>
                        <p> salem City</p>

                    </div>
                    <div className='p-3'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oGyi4VTew7nLH5NmL_V_psS04MtdpyDMzS_MrMmHUpUiip5pGkjbkeeWrf_E7DH2hQw&usqp=CAU' width="240" height="140" style={{ borderRadius: 20 }}></img>
                        <h4 className='p-2'>Chai Chawni Cafe</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,.. </p>
                        <p> trichy City</p>

                    </div>
                    <div className='p-3'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6EHnGtmIpfFTWI8m0MsygM406RCmR69itg&s' width="240" height="140" style={{ borderRadius: 20 }} ></img>
                        <h4 className='p-2'> Ice Cream Desserts</h4>
                        <p>4.4<span>60-65 mins</span></p>
                        <p>north Indian south Indian,.. </p>
                        <p>Chhindwara City</p>

                    </div>
                    <div>
                        <img src=''></img>
                    </div>

                </div>
                <hr></hr>

                <div className='d-flex  flex-wrap'>
                    <div className='row'>
                        <h2>Best Place To Eat Acros Cities</h2>
                        <div className='col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>

                            </div>
                        </div>

                        <div className='col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>

                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "12px" }}>
                                <p>best restaurants in Chennai</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='d-flex  flex-wrap mt-5' >
                    <div className='row'>
                        <h2>Best Cuisines Near Me</h2>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-3 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>chinesse restaurants near me</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='d-flex  flex-wrap mt-5 mb-5'>
                    <div className='row'>
                        <h2>Explore Every Restaurants Near Me</h2>
                        <div className=' col-md-6 p-2'>
                            <div className='card p-2 'style={{ borderRadius: "15px" }}>
                                <p>Explorerestaurants near me</p>
                            </div>
                        </div>
                        <div className=' col-md-6 p-2'>
                            <div className='card p-2'style={{ borderRadius: "15px" }}>
                                <p>Explore Top Rated restaurants near me</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className='navbar navbar-expand-lg navbar-light mt-3 w-100' style={{color:"#FOFOF5"}}>
                    <h3 className=''style={{fontSize:"24px"}}>For Better Experience,download the swigy app now</h3>
                    <button className='bg-dark text-white p-2 ' style={{ borderRadius: "10px",marginLeft:"70px" }}>
                        <img src='data:image/webp;base64,UklGRgoFAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOYBAAARkIRt21lHX92Obdv2LD1JTu12N97atm1rZdtcnVnb9swxmryrJP///dfVdURMAFUea+Rt3FDSSKGpXwBYn+YmKZKyF7avy6up0PkaHEYvDk5iV+UBnMcP90hkNiTsAvi8oiGvAgh8M76GYgjdHJnGyBQB+LZ0TeeSLwh4PqcplwpRqPCWNarKodAUBvw5Mboqg3wZqPAdH1QlQVaeFCD0cllbWfmSgPDzSXXl5EoDfDfz02XkMID1e3fvDAkWA8B6Nr+ZsCweQPTp2MYZSsH6e07PEJLJBqgIHBtUJcGdx+QDRN6sbucuy+IExJ5NquNGZwb47hSmOzPA//+u1lWdjFEAFRcGJzgwVEDsfE5VtRC601ExfNbsdEX+TlDM/ONAU8P66rHTlTD9jzvbjVHBit8qrWKnqYCHw1LJ3lAgeKl3BjnU2UUejq9Djj3MKj4ubpacoNCPff0Sya3GKXBmaNUkcq3zMR/nVCGRmWzeTa5DYnUm/9fUI9EGC/PWkARSyTuGZOryAtOrkEqxjXVIskfStS4kXc7dQcQw2xLnG0cssyF8NjE1RJ1oSFw1MU86Et9RIoLjiXMXd+ElxDvd6+ZUS+Le+oqjq71JwSpb7T4WkKJT/lqA+WM2qdsge+5coxFVvgFWUDgg/gIAAPASAJ0BKkAAQAA+MQ6MRiIREQoAIAMEtgBcyu0/APyA7SjInOfxc5lXaftf+wv+OzBfh3+Yflj/K/n1/Vf8BzmX9V+0bhAfsB/sfbP6QD+n/7n0a/Yb9ADypP2G+B79sP9V/lfaXcrxuVt9/6qmtJYu++JgFQhZSnwsX5NEgd6BdhaFOCcLmzgYgTp353hTdS/rNU+Sxv/nDq0bxmJbcuwA7Q8W+a7DWiB015zGP9roMi8tlsrzvHvCp7ReEA0vULrJUk8Q7H30MoMyRfDyl51//t5j5S/GOW6O/rIPN04e/q1/bs9MagtZhxIMhkwqc//+pukDa0Lciig4si5J4XFGy/4UupNpwqRDRiQYJZ8l0blVLhZNKagWmt2LD6AX3/Y3swco/y3jOOG9Ufvqen/MRFC/B9FXwFC6IQuarLQnJVN0GHmoW4zO9ftZuszn/1d8aKgUBdfAZIvrEP82/ZZ955CpqE918pg0OziZuJh/M3AuGKKXUwGl1G3c7CprrRkHTF9eskhS6pPrCyvwHxOzw793wJr41T+E5LgLO+lmY1UdOuxkKJhT9JR/RUfPz7M8FOk2XGbu/hImVL4M2o/35TflIGW/iazBSz//nwZ6gHZlNyRcpiBOsmRmMPhpiTY5Xl7ygfmxzk/jEkiVyJ1mU+DoNJIWp7gG1Z0iSh2AOMoEA1LEAO4TP+yeMGp5w0eVeUCIbEnUQHotcLDMmAxx3IWdISXF14wiLtSAOVdStDAnC7q8aG0gWpF2AD213CpyG06WLldyX2HXqiVX7bhC/TfK5lPe7y5Tb7PtBTLkeIa6zaw1v30yBfxsekG4lqtq1ZX7SMKidV4HQINsTG5Nkc5IMaFBchAOJy67VUW+UoOwP/pqkqq1PgmP27deh3YSVUCHWa2SSBfEK7ie0jisLbZVPs5BB38+B/elUwXGvJyZr+CpL1xrfb3Xh/C7q8aG0gV46cri8duzNIU3wWP8hQG7OYm73oiP2GgM+ngzWdHgkEwTqn+VkqIAAAA='width="20" height="20"></img>
                        
                        Goole Pay </button>
                    <button className='bg-dark text-white p-2'style={{ borderRadius: "10px",marginLeft:"150px" }}> 
                    <img src='data:image/webp;base64,UklGRjQFAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOcBAAARkKxt21k777ZV27bdDm3bNmYd2e3YtnEAtm3bdpN0rW/z/5PvPYGImAAEGZVaoGiR/BnJCWCMLdlzwc7zdx+/fv3yycUDS/qV0hXTaPF5T2xvLmoaqSVtyNGf4uv/U8PiNWSMvR0S/59NTQ6s47WQBHujTTBFtzoSuLuxSAC1z4jKC/V86/xalH7p6NOQ76LWHejLaFE93Icerq5wZ6vaP0X591oW+a6K+ptpZmuEcLlRW2EMtzFIvkch11PyGiOko/Io9IzlUb7cRgvt8FxiT/Ocis1Rz+WRujnmCPEsADHXmM5FAOU9pj8VgH5C3RtYzDUPOMC1A7jGda4gXnDdqZH2nutR/bRPZA1SP7PFfyCrHfWS63Y1XOM6UwAHuDYDi7lmAYO4ugHl/jG5ZYGIK0y3owDMZJoLAPUdogY54k7xnIjIgTE8g5FrwacsD+NywwyWicgz3zWOewl5oU2IwesI000MG2Fc5Jy+q+lmaPBd2++qsO3lKmsH+9GeqlHwc+QfRcPgb9e3Wv70hN81z+q4XgP+F1vvBOetzIdAW98K6kZ7BJ1v2uOwf+FH01OgsPCIY3/9cQ6NyoDS1EYLr7s2zvVFrZKgOabKwMUHLz95+/HT22eX9i4bUSkGlPkSCqXGJyJYAFZQOCAmAwAA0BAAnQEqQABAAD4xEIxGIhERCIAgAwS0gGT69haI/9P7V/8r+MlkR/neEG2AdrZb19jXO3pLJnfjl9tPcD/VL/Zdfv9ivRVP4AQf1lIT5Vbu56Tvt1RuNXYJ0zBgHiX5v7HRCoc0ILjkRbJq0u0bYlmWSmS42PwAiu0SrDSoSspQThIxhUvtW9Hf3khrxgAA/upC4K47nNFlDz5XcqZKTPBhsEwc8fS5s9bVrqShFxF/KRU3mHQqdHQTjqEnGNr0lll76JPGAPTiF9iwbNAcHJ0Jnj/z+pr7NLWh4ALoTnUfV3LuYazC1gmP/vV/+vfZR2BV0AtNoO738+fjZ4sCnu3//CmYkPV/zknYfmqfq/M6WrE9si7O50j+mxaJyBO4zJ7NEltKbu1LJh6R0SlssdTpzolasMq2T9ohCE91oZs0hqoR1V7+Pu4IzOLFooRPWb9Vjr7+LfP/yK9wskcSwsw/i39u91a5ER3LUw+oCU/d+MmSUlrHQlEE1gvvedero9LgcfLJRmqv/rrjExlNj64HWv99/ReW+jo/OONvupLaBmMull+1ic2gekZevPehCWNuQVGTGr3AoZvXWEa6P+/xsv9oqDb1df/Imy9kW3Md/6CLZl/uRT+kAf/9YyCYlD3bSnlbdPoeUreB6rXz2V9tCk96MJPr0mavnNkt2obRFVEgZkbsaww7JRPp0vo5BESLpreX1dj6491fAuga2E3K3tt1usWQ38Esqd/+9LVlsPZnHWz95wPkb6hQzhWDV/meP8LdXxkN6+OaqxtzPPsfZr/6P4l9PVK5jYcEhtmafm4u8eGGQpPa4WKoJ7sQn4NeyfdKqdtDV4Gyh6m/PCRdomDMt6Z541RB03JGrlsC2SajmUn/q/kvnim/2tiLDC7r737y470K2+MiLNWrtCdqrLALkRa8SPviGJVsmNP6CA2hRkPDfOsThVEqqKiA8ijqzF8ApFSwpzHn0hjIV2JSSHx5U3oGvLoCRIqpIrN3g+x1oK/+vKq08OvJ24qCAO+CdBGRRDl3j02IrV4gDceK0vaE4wX8E6sAbNRFF/JhQpsAAAA='width="19"height="20"></img>
                        App Store</button>

                </nav>
                <div className='d-flex  flex-wrap'>
                    <div className='row bg-dark text-white p-2 w-100'>
                        <div className='col-md-3'>
                            <h1>swigy</h1>
                            <p>2024 Bundl Technologies Pvt. Ltd</p>

                        </div>
                        <div className='col-md-3'>
                            <h6 className=''>Company</h6>
                            <div style={{color:"#FFFFFF99"}}>
                            <p >Abour</p>
                            <p>Careers</p>
                            <p>Team</p>
                            <p>Swiggy One</p>
                            <p>Swiggy Instamart</p>
                            <p>Swiggy Genie</p>
                            </div>

                        </div>
                        <div className='col-md-3 mb-5'>
                            <h6>Contact us</h6>
                            <div style={{color:"#FFFFFF99"}}>
                            <p>Help & Support</p>
                            <p>Partner With us</p>
                            <p>Ride with us</p>
                            </div>
                            <h6 className='mt-4'>Legal</h6>
                            <div style={{color:"#FFFFFF99"}}>
                            <p>Terms & Conitions</p>
                            <p>Cookie Policy</p>
                            <p>Privacy Policy</p>
                            <p>Investar Relations</p>
                            </div>

                        </div>
                        <div className='col-md-3'>
                            <h6>We deliver to</h6>
                            <div style={{color:"#FFFFFF99"}}>
                            <p>Bangalore</p>
                            <p>Gurgaon</p>
                            <p>hyderbad</p>
                            <p>Delhi</p>
                            <p>Mumbai</p>
                            <p>Pune</p>
                            <button className='bg-dark text-white'>589 cities</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="app">
      <Slider {...settings}>
        <div>
          <img src='https://www.gitsfood.com/wp-content/uploads/2021/04/04-33.jpg'width="144" height="180">
          </img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkK4VfSxTpE5fUg-kBeJV78ib0cn7zkiNsA&s' width="144" height="180">
        </img>
        </div>
        <div>
        <img src='https://www.shutterstock.com/image-photo/white-cup-black-coffee-isolated-600nw-1183800493.jpg' width="144" height="180">
        </img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm5FOaS9RlKjGWNnbQ453oxNEIHYZvLDG7w&s' width="144" height="180"></img>
        </div>
        <div>
        <img src='https://media.istockphoto.com/id/2153003107/photo/parotta-or-paratha-famous-and-popular-dish-of-kerala-tamilnadu-srilanka-fluffy-layered.jpg?s=612x612&w=0&k=20&c=bNEz7EeU50-e_DrwQr70Bw85GlgT-2wQF-y5xYN4pyc=' width="144" height="180" ></img>
        </div>
        <div>
        <img class="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" width="144" height="180" alt="restaurants curated for ">
        </img>
        </div>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbwkNRngxF17bzi1q-hgbwQMgU0njDp5rQg&s'width="144" height="180">
            </img>
        </div>
        <div >
                <img src='https://caspian.pizza/wp-content/uploads/2022/07/pizza.png'width="144" height="180">
                </img>
        </div>
        <div>
            <img src='https://pastrypalace.co.in/wp-content/uploads/2021/05/celebration-cake-65-600x600-1.jpg'width="144" height="180"></img>
        </div>
        <div>
            <img src='https://m.media-amazon.com/images/I/61FCTxz+uAL._AC_UF894,1000_QL80_.jpg'width="144" height="180"></img>
        </div>
        <div>
        <img src='data:image/jpeg;base64,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'width="144" height="180"></img>
        </div>
        <div>
            <img src='https://5.imimg.com/data5/OW/WE/MY-30494656/amul-realmilk-ice-cream.jpg'width="144" height="180"></img>
        </div>
        <div>
            <img src='https://www.haighschocolates.com.au/media/catalog/product/p/l/plu_617_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'width="144" height="180"></img>
        </div>
      </Slider>
    </div>
  {/* ); */}
        </div>
        </div>
    )
}
export default Webside;