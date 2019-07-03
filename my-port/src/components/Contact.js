import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, ListItemAction, Icon, List } from 'react-mdl';
import Pic from '../img/gopal.jpg'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Braja Gopal Das</h2>
            <img src={Pic} alt="gopal photo" style={{height: '250px'}} />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            I am a Web Developer and I enjoy turning complex problems into simple, beautiful and intuitive designs. I’ve always sought out opportunities and challenges that are meaningful to me.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                  <i class="fas fa-phone" /><span className="contact-no">8598070566, 9348151963</span>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                  <i class="fas fa-envelope" /><span className="contact-no">brajagopaldas77@gmail.com</span>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto'}}>
                  <i class="fas fa-address-card" /><span className="contact-no">Ameerpet, Hyderabad, Telengana, 53000</span>
                  </ListItemContent>
                </ListItem>
                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;