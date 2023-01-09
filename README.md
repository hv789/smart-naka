<H1 align="center"><IMG SRC="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=100&section=footer&text=Smart+Naka+by+Team+Cryptonian&fontSize=50"></H1>
<p align="center">
  <img src="http://ForTheBadge.com/images/badges/built-with-love.svg">
  <img src="http://ForTheBadge.com/images/badges/built-by-developers.svg"> 
  <img src="http://ForTheBadge.com/images/badges/built-with-swag.svg">
  <br>
  <img src="https://img.shields.io/badge/Made%20By-Team%20Cryptonian-red?style=for-the-badge&logo=appveyor">
  <img src="https://img.shields.io/badge/Ethos-IIT%20Guwahati-green?style=for-the-badge&logo=appveyor">
  <br>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</p>

# Introduction

<ul>
<li>Smart Naka is an app made by our team for the Smart Naka Problem Statement of Ethos Hackathon - IIT Guwahati.</li>

<li>It can fetch the information about a queried vehicle in real time in the central database of stolen vehicles of government and verify whether that vehicle is stolen or not.</li>

<li>The app also allows users to manually input vehicle details for searching. There are two options available for this: <b>Searching by Registration Number</b> and <b>Advanced Search</b>.</li>
</ul>

# Features

*<b>*Note that we were not given info about the actual stolen vehicles API, so we have used sample data for now. This can be changed as and according to need.</b>* <br>As of now the app contain following features:
<ul>
<li><b>Search History: </b>It will allow the police officer to keep a track of recent vehicle numbers which were queried and found out to be stolen.</li>

<li><b>Vehicle Details Card: </b>If the queried vehicle is found out to be stolen, a card will show the most important and relevant details needed by police officer.</li>

<li><b>Save and Share: </b>The card has two options which will save or share a pdf containing full details of the stolen vehicle fetched by api.</li>

<li><b>Local Alerts: </b>As of now this feature is not ready but can be implement. Other details on this can be found in <b>Ideation</b> section of this readme.</li>
</ul>

# Proposals based on our Ideation

Since this was our first Hackathon, so due to lack of experience and time we weren't able to implement some features which we were ideating. These were:
<ul>
<li><b>Local Alerts </b>We can send alerts to nearby police officers. The alerts can be of following types:
<ul> 
<li><b>Local FIR Alerts:</b> If a user registers an FIR of a stolen vehicle, the Police Station can send an alert about the FIR. </li>
<li><b>Real-Time Alerts</b>In the Real Time Camera Scan feature which is listed below, we will include a option to send alert about that vehicle number which was pointed through our app.</li>
</ul>
</li>

<li><b>Real Time Camera Scan: </b>This feature allows a police officer, to point his camera towards a vehicle number, and our app will instantly recognise the number from the camera feed (without even clicking a photo), and will tell whether its stolen or not. We were in the process of implementing this but this was not implemented fully yet.This will use react-native-vision-camera module which allows real-time AI tasks processing on camera feed.</li>
</ul>

# Contributors 
This project has been made and managed by Team - Cryptonian :

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/PGautam27">
        <img src="https://avatars.githubusercontent.com/u/99532371?v=4" width="100;" alt="Harsha Vardhan"/>
        <br/>
        <sub><b>Harsha Vardhan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ayushtiwari110">
        <img src="https://avatars.githubusercontent.com/u/84335414?v=4" width="100;" alt="ayushtiwari"/>
        <br/>
        <sub><b>Ayush Tiwari</b></sub>
      </a>
    </td>
  </tr>
</table>
<p align='center'><b>We would like to thank Ethos - IIT Guwahati for organising this Hackathon, which made us learn many new things.</b></p>
