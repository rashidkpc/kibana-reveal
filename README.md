# Deprecated: This only worked on Kibana 4.1

kibana-reveal
=============

Welcome to my slideshow seed for Kibana. This is a sample app for Kibana 4.1 that adds a new tab
called "Slides" to Kibana. In dev mode it will work entirely unassisted, however when using in a
compiled Kibana instance you'll need to add it to kibana.yml. Simple drop the contents of this 
repo into a directory called "reveal" in your kibana plugins dir

Note this is specific to Kibana 4.1, Kibana 4.2 introduces a formal plugin system which won't work
with this application. Think of this as a "technology preview". If you want to see the new plugin
system in Kibana 4.2 it has already been merged!

Using your own slides
----------------------

The slides here were assembled via http://slid.es and exported to html, in this case as
"offline.html". I was pretty lazy in creating these and simply took screenshots of a Keynote
presentation and used those. Its cheating. I know. I don't care.

I made a few, non-essential modifications to offline.html. You don't need them for this to work, but
they help the slides take up the full screen by constantly adjusting the "zoom" of the slides to
use the full width of the browser. You can find them in the last `<script>` tag in offline.html
