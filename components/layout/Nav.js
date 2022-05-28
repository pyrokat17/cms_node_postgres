import { useState } from "react";
import Link from "next/link";
import React from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
// style
import navStyle from "@/styles/layout/Nav.module.css";
export default function Nav() {
	const router = useRouter();
	console.log(router);
	const [activeList, setActiveList] = useState(
		router.pathname.split("/")[0] || null
	);
	const list = [
		{
			title: "Tables",
			url: "/tables",
		},
	];
	const handleItemClick = (item) => {
		setActiveList(item.title);
		router.push(item.url);
	};
	return (
		<div>
			{list.map((item) => {
				return (
					<div
						className={
							activeList === item.title
								? `${navStyle["nav-menu-item"]} ${navStyle["nav-menu-item-active"]}`
								: navStyle["nav-menu-item"]
						}
						key={item.title}
						onClick={() => handleItemClick(item)}
					>
						<Icon name="table" />
						{item.title}
					</div>
				);
			})}
		</div>
	);
}
