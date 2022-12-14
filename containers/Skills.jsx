import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Container, Row, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
	return skillsSection && (
		<Container id="skills" className="text-center my-5 section section-lg">
			<h1 className="h1">{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle[0]}</p>
			<p className="lead">{skillsSection.subTitle[1]}</p>
			{skillsSection.data.map((section, index) => {
				return (
					<Row className="my-5" key={index}>
						
						
							<Fade right duration={2000}>
								<h3 className="h3 mb-2">{section.title}</h3>
								<div className="d-flex justify-content-center flex-wrap mb-2">
									{section.softwareSkills.map((skill, i) => {
										return (
											<Fragment key={i}>
												<div
													className="icon icon-xl icon-shape shadow-sm rounded-circle m-1"
													id={skill.skillName.replace(/\s/g, '')}
												>
													<Icon
														icon={
															skill.fontAwesomeClassname
														}
														data-inline="false"
													></Icon>
												</div>
												<UncontrolledTooltip
													delay={0}
													placement="bottom"
													target={skill.skillName.replace(/\s/g, '')}
												>
													{skill.skillName}
												</UncontrolledTooltip>
											</Fragment>
										);
									})}
								</div>
								<div>
									{section.skills.map((skill, i) => {
										return <p key={i}>{skill}</p>;
									})}
								</div>
							</Fade>
						
					</Row>
				);
			})}
		</Container>
	);
};

export default Skills;
