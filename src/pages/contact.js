import React from 'react'


export default function Contact(props) {
	return (
		<div className='title'>
			<h2>Contact</h2>
			<form action="https://formspree.io/mtthw.li7@gmail.com" method="POST">
				<div class="form-group">
    					<input type="name" class="form-control" id="name" placeholder="Name">
    					</input>
    					<input type="email" class="form-control" id="email" placeholder="Email Address">
    					</input>
    					<input type="phone" class="form-control" id="phone" placeholder="Phone Number">
    					</input>
    					<textarea name="message" class="form-control" id="message" placeholder="Message"></textarea>
    					<input type="submit" class="btn btn-primary" value="Send"></input>
  				</div>
			</form>
		</div>
		)
}