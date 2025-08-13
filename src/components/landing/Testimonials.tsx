import { Quote } from "lucide-react";

const testimonials = [
	{
		title: "TESTIMONIAL BY POOJA JAIN - SHIKHERJEE JEWELLERS",
		quote: `At Vilandl, we make bespoke Polki jewellery with the finest syndicate polkis, coloured gemstones and even finer details. We are extremely conscious about quality and create pieces that will be cherished for generations. We manufacture all of our jewellery pieces in-house and cater to both B2B and B2C clients. Recently, I referred Mr. R. S. Kumar from M/S Kumar Generator House to Mr Abhishek Jain of Jainco Sphere, a real estate company developing luxury homes in Delhi NCR. They had a detailed meeting and were really impressed with the knowledge and command he had on his industry. He suggested some important changes in their existing selection of material and design of LT panels and also, some value-added services which would enrich the experience of their customers. He was so convincing and transparent with his pricing and product detailing that Mr Abhishek gave an order for 2 of his`,
		name: "Pooja Jain",
		role: "Shikherjee Jewellers",
	},
	{
		title: "TESTIMONIAL BY AANCHAL SAINI, AARK WORLD PVT. LTD.",
		quote: `RENT IT BAE is a luxury fashion rental service offering Ethnic, Western & Accessories from designer labels at a fraction of MRP. Servicing 15 cities via Website, m-site, Android & iOS apps. First to introduce Monthly Fashion Subscription in the country. The company has it's 2 Flagship Stores in New Delhi (Rajouri Garden and Greater Kailash-1). RENT IT BAE has taken the media limelight for building country's first tech driven store. We highly appreciate the fast and seamless service provided by your company. The installation of inverters for RENT IT BAE's South Delhi Flagship Store at Greater Kailash seemed a fluid task with your service. The requirement for a power back up is a must for all companies now days especially in the retail sector. You understood the requirement and delivered the apt products at a reasonable price. All was done post one phone call. No follow ups were required. The products wer...`,
		name: "Aanchal Saini",
		role: "AARK World Pvt. Ltd.",
	},
	{
		title: "TESTIMONIAL BY BHARAT ANAND - BROWN GOLD",
		quote: `We at BROWNGOLD are a team of young & dynamic interior designers engaged in the business of providing complete design solutions for our clients, be it individuals, architects or corporate for the last 3 decades. We have a passion of interiors which enables us in providing quality & timely delivery of our design services & products for our clients pan India. We would like to place on record our appreciation for Mr. R.S. Kumar of Kumar Generator House. We had taken their services for our 40 kva kirloskar generator & a small genset of 7 kva. We would like to take this opportunity to thank you for providing excellent advice, excellent products & excellent service. We would not hesitate to recommend Kumar Generator House to prospective clients, looking for a high level of professional service, with attention on a long term client focused relationship. We are extremely pleased & look forward to increasing our level of business with yourselves in the coming`,
		name: "Bharat Anand",
		role: "BROWNGOLD",
	},
];

const Testimonials = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto">
				<h3 className="text-3xl md:text-4xl font-bold text-center mb-2">
					Real Stories. Real Power.
				</h3>
				<p className="text-center text-gray-700 mb-10 text-base md:text-lg">
					Hear how our generators keep India powered — from Fortune 500 factories
					to city hospitals.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className="rounded-xl shadow bg-white border flex flex-col h-full"
						>
							<div className="bg-black text-white rounded-t-xl px-6 py-3 font-semibold text-sm truncate">
								{t.title}
							</div>
							<div className="flex-1 flex flex-col px-6 py-6">
								<Quote className="text-blue-500 w-7 h-7 mb-2" />
								<p className="text-gray-900 text-sm mb-6 flex-1 leading-relaxed">
									{t.quote}
								</p>
								<div className="mt-auto text-right">
									<div className="font-bold text-base text-gray-900">
										{t.name}
									</div>
									<div className="text-xs text-gray-600">{t.role}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-center">
					<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow">
						Watch More Stories
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;