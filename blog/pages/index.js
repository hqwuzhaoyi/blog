import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import {
	Row, Col, List, Icon,
} from 'antd';
import axios from 'axios'
import Header from '../components/Header';
import Author from '../components/Author';
import '../public/style/pages/index.css';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import servicePath from '../config/apiUrl'

const Home = (list) => {
	const [myList, setMylist] = useState(
		list.data
	);

	const renderer = new marked.Renderer();
	marked.setOptions({
		renderer: renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false,
		sanitize: false,
		xhtml: false,
		highlight: function (code) {
			return hljs.highlightAuto(code).value;
		}

	});

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
					<List
						header={<div>最新日志</div>}
						dataSource={myList}
						itemLayout="vertical"
						renderItem={(item) => (
							<List.Item>
								<div className="list-title">
									<Link href={{ pathname: '/detailed', query: { id: item.id } }}>
										<a>{item.title}</a>
									</Link>
								</div>
								<div className="list-icon">
									<span>
										<Icon type="calendar" />
										<span> {item.addTime}:</span>
									</span>
									<span>
										<Icon type="folder" />
										<span> {item.typeName}</span>
									</span>
									<span>
										<Icon type="fire" />
										<span>{item.view_count}</span>
									</span>
								</div>
								<div className="list-context"
									dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
								/>
							</List.Item>
								)}
							/>
							</Col>
							<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
								<Author />
								<Advert />
							</Col>
			</Row>
			<Footer />
		</>
				);
			};


Home.getInitialProps = async () => {

	const promise = new  Promise((resolve) => {

					axios(servicePath.getArticleList).then(
						(res) => {

							resolve(res.data)
						}
					)

				})
				return await promise; 
			}
			 
			export default Home;
