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
	const serviceId = import.meta.env.VITE_REACT_APP_MSG_SERVICE_ID
	const templateId = import.meta.env.VITE_REACT_APP_MSG_TEMPLATE_ID
	const templateKey = import.meta.env.VITE_REACT_APP_MSG_TEMPLATE_KEY

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		emailjs
			.send(
				serviceId,
				templateId,
				{
					from_name: form.name,
					to_name: "Arcane Arts (siegecraftgame.com)",
					from_email: form.email,

				},
				templateKey
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
		<section className="">
			<div className="flex flex-col-reverse items-center justify-center w-full mt-0 2xl:mt-0 lg:flex-row lg:min-h-fit">
				<div className="w-full p-8 lg:w-1/2 ">
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
						<p className="pt-8 text-xl font-bold text-sc-off-white">
							Thanks for your email! We can't wait for you to play!
						</p>
					) : (
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="grid grid-flow-col grid-cols-12 mt-12 space-x-2 md:space-x-4"
						>
							<input
								type="email"
								className="col-span-7 col-start-1 py-3 pl-2 text-xl font-medium border-none rounded outline-none bg-sc-off-white md:py-4 lg:col-span-8 md:pl-4 placeholder:text-sc-dark-black/60 font-Catamaran"
								name="email"
								placeholder="Your email address"
								value={form.email}
								onChange={handleChange}
							/>

							<button
								type="submit"
								className="col-span-5 col-start-8 px-6 py-3 text-xl font-bold text-center rounded bg-sc-red hover:bg-sc-red-dark text-sc-off-white hover:text-sc-gold lg:col-start-9 lg:col-span-4 font-Cinzel md:py-4 md:text-2xl"
							>
								{loading ? "Sending..." : "Submit"}
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default SectionWrapper(ContactSection, "contact", "bg-sc-dark-black");
