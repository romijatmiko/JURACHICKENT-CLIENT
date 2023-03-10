import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBBtn,
	MDBProgress,
	MDBProgressBar,
} from "mdb-react-ui-kit";
import { NavbarJura } from "../../components/user/navbarj";
import { FooterJura } from "../../components/user/FooterJura";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { API_URL } from "../../url";

export default function Profile() {
	const [nama_user, setNama] = useState("");
	const [email_user, setEmail_user] = useState("");
	const [no_hp, setNo_hp] = useState("");
	const [alamat, setAlamat] = useState("");
	const [kabupaten, SetKabupaten] = useState("");
	const [kode_pos, setKode_pos] = useState("");
	const [setMsg] = useState("");
	const { id } = useParams();
	const yes = "true";

	useEffect(() => {
		const user = async () => {
			try {
				const response = await axios.get(API_URL + `/users/get/${id}`);
				setNama(response.data.nama_user);
				setEmail_user(response.data.email_user);
				setNo_hp(response.data.no_hp);
				setAlamat(response.data.alamat);
				SetKabupaten(response.data.kabupaten);
				setKode_pos(response.data.kode_pos);
			} catch (error) {
				if (error.response) {
					setMsg(error.response.data.msg);
				}
			}
		};
		user();
	}, [id]);

	const [order, setOrder] = useState([]);

	useEffect(() => {
		getAllOrdersId();
	}, []);
	const getAllOrdersId = async () => {
		const q = await axios.get(API_URL + "/order/get/all/" + id);
		setOrder(q.data);
	};

	return (
		<section style={{ backgroundColor: "#FFFFFF" }}>
			<NavbarJura />
			<MDBContainer className="py-5">
				<MDBRow>
					<MDBCol lg="4">
						<MDBCard className="mb-4">
							<MDBCardBody className="text-center">
								<MDBCardImage
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle"
									style={{ width: "150px" }}
									fluid
								/>
								<p className="text-muted mb-4">{nama_user}</p>
								<div className="d-flex justify-content-center mb-2">
									<MDBBtn>Follow</MDBBtn>
									<MDBBtn outline className="ms-1">
										Message
									</MDBBtn>
								</div>
							</MDBCardBody>
						</MDBCard>

						{/* <MDBCard className="mb-4 mb-lg-0">
							<MDBCardBody className="p-0">
								<MDBListGroup flush className="rounded-3">
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon fas icon="globe fa-lg text-warning" />
										<MDBCardText>https://mdbootstrap.com</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="github fa-lg"
											style={{ color: "#333333" }}
										/>
										<MDBCardText>mdbootstrap</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="twitter fa-lg"
											style={{ color: "#55acee" }}
										/>
										<MDBCardText>@mdbootstrap</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="instagram fa-lg"
											style={{ color: "#ac2bac" }}
										/>
										<MDBCardText>mdbootstrap</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="facebook fa-lg"
											style={{ color: "#3b5998" }}
										/>
										<MDBCardText>mdbootstrap</MDBCardText>
									</MDBListGroupItem>
								</MDBListGroup>
							</MDBCardBody>
						</MDBCard> */}
					</MDBCol>
					<MDBCol lg="8">
						<MDBCard className="mb-4">
							<MDBCardBody>
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Nama</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{nama_user}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Email</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{email_user}
										</MDBCardText>
									</MDBCol>
								</MDBRow>

								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>No Hp</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">{no_hp}</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Alamat</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{alamat}, {kabupaten}, {kode_pos}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>

						<MDBRow>
							<MDBCol md="6">
								<MDBCard className="mb-4 mb-md-0">
									<div class="scrollbar scrollbar-primary">
										<div class="force-overflow"></div>

										<MDBCardBody>
											<MDBCardText className="mb-4">
												<span className="text-primary font-italic me-1">
													YOUR ORDERS
												</span>{" "}
												STATUS
											</MDBCardText>
											{order.map((kocak, index) => (
												<>
													<MDBCardText
														className="mt-4 mb-2 mr-4"
														style={{ fontSize: ".77rem" }}>
														<span class="badge badge-dark mb-1" id="ggwp">
															{"Your Order Information"}
															{}
														</span>
														<div class="ggzm">
															<MDBCol>
																<MDBCardText>
																	Order ID : {kocak.uuid}
																</MDBCardText>
															</MDBCol>

															<MDBCol>
																<MDBCardText>
																	Total_harga : {kocak.total_price}
																</MDBCardText>
															</MDBCol>
															<MDBCol>
																<MDBCardText>
																	Jumlah Makanan : {kocak.jumlah_items}
																</MDBCardText>
															</MDBCol>
														</div>
													</MDBCardText>
													{kocak.sudahDikirim === yes ? (
														<Button
															size="sm"
															type="submit"
															className="ggm"
															href={"/order/status/dikirim/" + kocak.uuid}>
															<a>See Details</a>
														</Button>
													) : kocak.sudahBayar === yes ? (
														<Button
															size="sm"
															type="submit"
															className="ggm"
															href={"/order/status/sudah_bayar/" + kocak.uuid}>
															<a>See Details</a>
														</Button>
													) : kocak.orders_complete === yes ? (
														<Button
															size="sm"
															type="submit"
															className="ggm"
															href={"/order/status/complete/" + kocak.uuid}>
															<a>See Details</a>
														</Button>
													) : kocak.sampai === yes ? (
														<Button
															size="sm"
															type="submit"
															className="ggm"
															href={"/order/status/order_sampai/" + kocak.uuid}>
															<a>See Details</a>
														</Button>
													) : (
														<Button
															size="sm"
															type="submit"
															className="ggm"
															href={"/order/status/belum_bayar/" + kocak.uuid}>
															<a>See Details</a>
														</Button>
													)}
												</>
											))}
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>

							<MDBCol md="6">
								<MDBCard className="mb-4 mb-md-0">
									<MDBCardBody>
										<MDBCardText className="mb-4">
											<span className="text-primary font-italic me-1">
												YOUR ACTIVITY
											</span>{" "}
											ALL TIME
										</MDBCardText>
										<MDBCardText
											className="mb-1"
											style={{ fontSize: ".77rem" }}>
											Web Design
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={0} valuemin={0} valuemax={100} />
										</MDBProgress>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<FooterJura />
		</section>
	);
}
