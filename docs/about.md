---
layout: home

hero:
  name: About
  text: Innovations
  tagline: Who we are, what do we provide and what it is for you?
features:
  - title: Who we are?
    details: codbex is an innovative and dynamic technology company that specializes in providing software solutions to businesses in a variety of industries. We at codbex put our customers’ satisfaction first - our aspiration is to be a trusted partner for companies that want to use the full potential of their assets and drive sustainable success in an increasingly competitive digital environment.
  - title: What do we provide?
    details: codbex offers an unique high-productivity application platform foundation for our partner’s network to design and develop vertical industry solutions based on the variety of open source technologies and open standards, and deliver them to customers on any hyperscaler as well as on-premises. Our leading offerings include advanced database management systems, reliable business process integration tools, and customized software solutions designed to improve business productivity.
  - title: What is it for you?
    details: Developers need a platform providing powerful tooling, scallable infrastructure and a huge number of reusable components. Enterprises looking for a modern, extendable and secure cloud applications for their specific business needs. Vendors want to build solutions tailored for specific customer’s needs by combining ready to use components. Resellers want to expand their products and services portfolio by promoting and reselling vertical industry solutions.

editLink: false

title: Who we are?
---

<script setup>
import {
  VPTeamMembers,
} from 'vitepress/theme';
import { getInternalMembers } from '/.vitepress/theme/utils/membersUtils';
import { withBase } from 'vitepress';
const internalMembers = getInternalMembers();
</script>

<br/><br/>

# Our Team
    
Our team consists of skilled professionals and experts, with an eye for innovation, who use the latest technologies and methodologies to deliver solutions that exceed expectations.


  <VPTeamMembers :members="internalMembers"/>


<style scope>
  @media (min-width: 640px) {
    .lead[data-v-f3b658bb] {
      text-align: left;
      max-width: 100%;
    }
  }

  @media (min-width: 960px) {
    .lead[data-v-f3b658bb] {
      text-align: left;
      max-width: 80%;
    }
  }

  @media (min-width: 1280px) {
    .lead[data-v-f3b658bb] {
      text-align: left;
      max-width: 60%;
    }
  }
</style>
