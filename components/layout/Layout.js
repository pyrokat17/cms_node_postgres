import Header from "@/components/layout/Header";
import { Container, Segment } from "semantic-ui-react";
import Nav from "@/components/layout/Nav";
export default function Layout({ children }) {
	return (
		<div
			style={{
				minHeight: "100vh",
				maxHeight: "100vh",
				overflow: "hidden",
				backgroundColor: "grey",
			}}
		>
			<Header />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Segment
					inverted
					style={{
						width: "29vw",
						minHeight: "90vh",
						maxHeight: "90vh",
						margin: "0 0.3vw 0 0.3vw",
						overflowY: "scroll",
						overflowX: "hidden",
					}}
				>
					<Nav />
				</Segment>
				<Segment
					inverted
					style={{
						width: "70vw",
						minHeight: "90vh",
						maxHeight: "90vh",
						overflowY: "scroll",
						overflowX: "hidden",
					}}
				>
					{children}
				</Segment>
			</div>
		</div>
	);
}
