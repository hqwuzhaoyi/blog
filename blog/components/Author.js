import React from 'react';
import { Avatar, Divider } from 'antd';
import '../public/style/components/Author.css';

const Author = () => (
	<div className="author-div comm-box">
		<div>
			<Avatar size={100} src="http://www.wuzhaoyi.xyz/uploads/avatar.jpg" />
			<div className="author-introduction">
                Great power with great responbility
				<Divider>社交账号</Divider>
				<Avatar size={28} icon="github" className="account" />
				<Avatar size={28} icon="qq" className="account" />
				<Avatar size={28} icon="wechat" className="account" />
			</div>

		</div>
	</div>

);

export default Author;
