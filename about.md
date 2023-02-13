---
title: Who we are?
---

We at <b>codbex</b> provide an innovative approach for building, deploying, selling and operating open source business applications in the cloud.

## What do we provide?

We at codbex offer an unique high-productivity application platform foundation for our partner's network 
to design and develop vertical industry solutions based on the variety of
open source technologies and open standards, and deliver them to customers on any hyperscaler as well as on-premises.

## What it is for you?

<strong>Developers</strong> need a platform providing powerful tooling, scallable infrastructure and a huge number of reusable components.<br>
<strong>Enterprises</strong> looking for a modern, extendable and secure cloud applications for their specific business needs.<br>
<strong>Vendors</strong> want to build solutions tailored for specific customer's needs by combining ready to use components.<br>
<strong>Resellers</strong> want to expand their products and services portfolio by promoting and reselling vertical industry solutions.<br>

## Our Team

We've built an amazing, fantastic team of developers, marketers, designers, legal and sales people.

<ul class="staff">
	{% for person in site.staff_members %}
		<li>
			<div class="square-image"><img src="{% include relative-src.html src=person.image_path %}" alt="{{ person.name }}"/></div>
			<div class="name"><a target="_blank" href="https://twitter.com/{{ person.twitter }}">{{ person.name }}</a></div>
			<div class="position">{{ person.position }}</div>
		</li>
	{% endfor %}
</ul>