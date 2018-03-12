import './styles.css';
import { Entry } from './journal.js';

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();

    var title = $("#title").val();
    var content = $('#content').val();
    var newEntry = new Entry(title, content);
    $("div#journalEntry, div#results").empty();
    $("div#journalEntry").append("<div><h1>" + newEntry.title + "</h1><p>" + newEntry.content + "</p></div><br>");

    $("div#results").append("<div><h1>" + "Results" + "</h1><p>" + "Vowels: " + newEntry.getVowels() + "</p>" + "<p>" + "Consonants: " + newEntry.getConso() + "</p>" + "<p>Entry teaser: " + newEntry.getTeaser() + "</p></div>");
  });
});
