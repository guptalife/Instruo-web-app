import React from "react"
import slide1 from "../../assets/carousel/slide1.jpg"
import slide2 from "../../assets/carousel/slide2.jpg"
import slide3 from "../../assets/carousel/slide3.jpg"
import slide4 from "../../assets/carousel/slide4.jpg"
import slide5 from "../../assets/carousel/slide5.jpg"

const Carousel = () => {
	return (
		<div className="p-8">
			<h2 className="text-5xl md:text-6xl font-extrabold text-center">
				Previous Editions
			</h2>
			<div
				id="carouselExampleCaptions"
				className="carousel slide relative carousel-fade shadow-lg rounded-xl my-12"
				data-bs-ride="carousel">
				<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="3"
						aria-label="Slide 4"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="4"
						aria-label="Slide 5"></button>
				</div>
				<div className="carousel-inner relative w-full overflow-hidden">
					<div className="carousel-item active relative float-left w-full">
						<img
							src={slide1}
							className="block w-full max-h-[70vh] object-cover"
							alt="..."
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src={slide2}
							className="block w-full max-h-[70vh] object-cover"
							alt="..."
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src={slide3}
							className="block w-full max-h-[70vh] object-cover"
							alt="..."
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src={slide4}
							className="block w-full max-h-[70vh] object-cover"
							alt="..."
						/>
					</div>
					<div className="carousel-item relative float-left w-full">
						<img
							src={slide5}
							className="block w-full max-h-[70vh] object-cover"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon inline-block bg-no-repeat"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon inline-block bg-no-repeat"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	)
}

export default Carousel
