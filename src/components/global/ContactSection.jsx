import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import SectionWrapper from "../hoc/SectionWrapper";
import { homePageSectionTitles } from "../../constants";

const ContactSection = () => {
	const formRef = useRef();

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		emailjs
			.send(
				"service_f4iid1f",
				"template_e0sbp9k",
				{
					from_name: form.name,
					to_name: "Arcane Arts (siegecraftgame.com)",
					from_email: form.email,
					to_email: "bard07_chances@icloud.com",
					message: form.message,
				},
				"uzmyvnrM-EtM2dzaO"
			)
			.then(
				() => {
					setLoading(false);
					setFormSubmitted(true);
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					console.log(error);
					alert(
						"Something went wrong with your email. Please try again."
					);
				}
			);
	};

	return (
		<div className="">
			<div className=" 2xl:mt-0 mt-0 flex  flex-col-reverse lg:flex-row justify-center items-center w-full  lg:min-h-fit">
				<div className="lg:w-1/2 w-full p-8 ">
					<h2
						className={`text-sc-off-white font-Cinzel text-3xl text-center pb-4`}
					>
						{homePageSectionTitles[4].title}
					</h2>
					<p
						className={`text-sc-off-white font-Catamaran text-xl`}
						dangerouslySetInnerHTML={{
							__html: homePageSectionTitles[4].subTitle,
						}}
					/>

					{formSubmitted ? (
						<p className="text-sc-off-white font-bold text-xl pt-8">
							Thanks for your email! We can't wait for you to play!
						</p>
					) : (
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="mt-12 grid grid-flow-col grid-cols-12 space-x-2 md:space-x-4"
						>
							<input
								type="email"
								className="bg-sc-off-white py-3 md:py-4 col-start-1 col-span-7 lg:col-span-8 pl-2 md:pl-4 placeholder:text-sc-dark-black/60 rounded outline-none border-none font-medium font-Catamaran text-xl"
								name="email"
								placeholder="Your email address"
								value={form.email}
								onChange={handleChange}
							/>

							<button
								type="submit"
								className="bg-sc-red hover:bg-sc-red-dark text-sc-off-white hover:text-sc-gold col-start-8 lg:col-start-9 col-span-5 lg:col-span-4 font-Cinzel py-3 md:py-4 px-6 rounded font-bold text-xl md:text-2xl text-center"
							>
								{loading ? "Sending..." : "Submit"}
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(ContactSection, "contact", "bg-sc-dark-black");
