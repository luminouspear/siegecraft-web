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
			<div className="lg:mt-36 2xl:mt-0 mt-0 flex  flex-col-reverse lg:flex-row justify-center items-center ml-12 lg:ml-0 relative   lg:min-h-fit">
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
							className="mt-12 flex flex-row space-x-4"
						>
							<input
								type="email"
								className="bg-sc-off-white w-8/12 py-4 px-6 placeholder:text-sc-dark-black/60 rounded outline-none border-none font-medium font-Catamaran"
								name="email"
								placeholder="Your email address"
								value={form.email}
								onChange={handleChange}
							/>

							<button
								type="submit"
								className="bg-sc-red hover:bg-sc-red-dark text-sc-off-white hover:text-sc-gold w-4/12 font-Cinzel py-4 px-6 rounded font-bold text-2xl"
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
