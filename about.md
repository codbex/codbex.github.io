---
title: Who we are?
---

<b>codbex</b> is an innovative and dynamic technology company that specializes in providing software solutions to businesses in a variety of industries.
We at codbex offer a unique platform for designing and developing industry solutions based on open source technologies, tailored to meet the evolving needs of modern business. Our leading offerings include advanced database management systems, reliable business process integration tools, and customized software solutions designed to improve business productivity.
We at codbex put our customers' satisfaction first - our aspiration is to be a trusted partner for companies that want to use the full potential of their assets and drive sustainable success in an increasingly competitive digital environment.

## What do we provide?

<b>codbex</b> offers an unique high-productivity application platform foundation for our partner's network to design and develop vertical industry solutions based on the variety of
open source technologies and open standards, and deliver them to customers on any hyperscaler as well as on-premises.

## What it is for you?

<strong>Developers</strong> need a platform providing powerful tooling, scallable infrastructure and a huge number of reusable components.<br>
<strong>Enterprises</strong> looking for a modern, extendable and secure cloud applications for their specific business needs.<br>
<strong>Vendors</strong> want to build solutions tailored for specific customer's needs by combining ready to use components.<br>
<strong>Resellers</strong> want to expand their products and services portfolio by promoting and reselling vertical industry solutions.<br>

## Our Team

Our team consists of skilled professionals and experts, with an eye for innovation, who use the latest technologies and methodologies to deliver solutions that exceed expectations

<ul class="staff">
	{% for person in site.staff_members %}
		<li>
			<div class="square-image"><img src="{% include relative-src.html src=person.image_path %}" alt="{{ person.name }}"/></div>
			<div class="name"><a target="_blank" href="{{ person.github }}">{{ person.name }}</a></div>
			<div class="position">{{ person.position }}</div>
		</li>
	{% endfor %}
</ul>