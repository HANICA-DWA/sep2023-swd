<h1>02 REST and HTTP</h1>

  <p>The concepts of REST are very closely linked with HTTP. HTTP, as you probably know, is everywhere on the internet. Every time you load a web page, you make an HTTP request and you get HTML content in the response.</p>
  <p>REST is inspired by a lot of the concepts of HTTP. Roy Fielding, the one who coined the term, is one of the principal authors of the HTTP specification. So, it’s no surprise that the ideas behind REST make good use of the ideas and concepts behind HTTP.
    So, to understand REST, you really need to have some basic understanding of HTTP itself. Notice that I said HTTP specification. Yes, specification means <em>rules</em>. What defines HTTP is clearly laid out in the specification, so unlike REST, there
    is no vagueness about it.</p>
  <h2 id="understanding-http">Understanding HTTP</h2>
  <p>HTTP stands for Hyper Text Transfer Protocol. Like we’ve already seen, you can think of a <em>protocol</em> as a language or mechanism for communication. So, HTTP is a way to exchange and communicate information online.</p>
  <p>The <em>stuff</em> you exchange and transfer in HTTP is called <strong>hypertext</strong>. (Hence the name). Hypertext is a structured form of text that has one interesting property: it contains logical links to other text. These links are called <strong>hyperlinks</strong>.
    I’m sure you know what they are. A common and popular way to write hypertext is using a language called HyperText Markup Language, or HTML. Which is again something you already know.</p>
  <p>I will not go into the details of HTTP itself, because that’s beyond the scope of this course. Let’s switch to REST. We’ll look at some of the HTTP concepts that have inspired REST, and how those concepts are applied to RESTful APIs and services.</p>
  <h2 id="resource-locations">Resource locations</h2>
  <p>Just like web pages, REST APIs have URLs and addresses too. That way they are similar to web sites. One major difference is, since they are not meant to be read directly by humans, the response usually contains just the core data. For example, if you
    need to look up a weather for a place on a weather website, you’ll get a response with HTML showing the weather in a readable format. The HTML returned might also have other HTML elements, some CSS for styling, the site banner, some ads on the side
    and so on. This is because this response is meant to be read by a human. But a REST API response for a weather service probably has just the weather data in XML or JSON.</p>
  <p>Since APIs have addresses, an API designer or web service developer needs to decide what the addresses should be. The practice in RESTful APIs is to have <strong>resource based addresses</strong>. In the case of a weather website, the URI to look up
    the weather at a zip code 12345 could be something like <code>/weatherapp.com/weatherLookup.do?zipcode=12345</code>. This is a perfectly valid URI, and it is common to see addresses like this too. But this address is not resource based. I would say
    this is more <em>action based</em>. This tells you that there is something called <code>weatherLookup.do</code> that takes the zip code as parameter. </p>
  <p>Resource based addresses, on the other hand, indicate just the resource and they are independent of the server side implementation. For instance, a RESTful API for weather could have the address <code>/weatherapp/zipcode/12345</code>. It’s almost as
    if you are not making the server <em>do</em> any action, but rather just <em>look up and get</em> something that already exists. So, weather for zip code 56789 is at <code>/weatherapp/zipcode/56789</code>. And weather forecast for a country could
    be designed to be at a location like <code>/weatherapp/countries/countryname</code>. In a later tutorial, we will discuss about how to go about designing these addresses when writing REST APIs. This is a very important part of being RESTful.</p>
  <h2 id="http-methods">HTTP methods</h2>
  <p>Now that you have decided what the address is, how do you interact with it? HTTP has what are called <em>methods</em> or <em>verbs</em> that you can use to interact with URLs. You must be familiar with GET and POST methods. A GET method lets you get
    information from the server. And POST is used when you want to submit information to the server. They work well with resource based URIs that we just saw. So a GET request to URI <code>/weatherapp/zip/12345</code> will get you the weather at that
    location. There is another method called PUT that you wouldn’t normally use in HTML forms. PUT also lets you submit data to the server, but it is a bit different from POST, and we’ll learn about this later. There’s also a DELETE method that lets you
    specify that you want something removed.</p>
  <p>A good RESTful web service API makes good use of these HTTP methods. Not all requests are done through POST like a SOAP web service would do. The method that a developer chooses for each API action depends on the action that is performed and the intended
    use. </p>
  <h2 id="metadata">Metadata</h2>
  <p>Ok, so let’s say we tell the client what the address is and what HTTP method to use to call it. When they make the call, what is the response that we’ll send back? Well, obviously we need to send the response they want. A GET request for the weather
    URL would have the weather information in the response body. But HTTP also defines status codes and response headers which lets the server send back extra information or metadata that might be useful to the client. One useful piece of information
    that every response has is the status code. It’s a number that shows up in the very first line of the response. It indicates if the response was successful or if there was an error. If a HTTP response is successful, a <code>200</code> status code
    is returned. If there is an error on the server while processing the request, the server sends back status code <code>500</code>. If you are trying to access something that does not exist or the server is unable to find, the popular error code <code>404</code>    is returned. </p>
  <p>If you are accessing a website, you’ll probably get some HTML that explains the problem. For example, for a <code>404</code> error, you get a page that shows the “page not found” message, probably along with links to the home page to help the user.
    But in the case of RESTful web services, you cannot send readable messages because the client is a piece of code! This is why sending the right status code is very important. </p>
  <h2 id="content-types">Content types</h2>
  <p>Finally, let’s look at the format of the messages. Let’s say you submit some data to the server as a POST request. There is no specification that strictly enforces what the format of the data should be. It could be XML, JSON or some other format. How
    can the server even identify what kind of data is sent? Similarly, how does the client know what data format is returned by the server? The answer is again a header value called <code>Content-Type</code>. Like I mentioned, the headers contain a lot
    of metadata, and one of the metadata values it can contain is the format of the message. There are standard predefined content type values, like <code>text/xml</code> for XML content or <code>application/json</code> for JSON content. A message that’s
    send with the right content type is easily readable by the server and the client. What’s really interesting is that the same API can send back data in multiple different formats, and the actual format it chooses depends on what the client wants. This
    happens by a process called content negotiation, which is another powerful feature that you can use when developing RESTful web services.</p>
  <h2 id="summary">Summary</h2>
  <p>This was a broad overview of some of the important points about RESTful web services and how they’ve been influenced by HTTP. When you design a RESTful API:</p>
  <ol>
    <li>You need to have resource-based URIs. Every resource or entity should be identifiable by a single URI.</li>
    <li>You need to choose the right HTTP methods for different actions and operations for the API.</li>
    <li>The response needs to return the right HTTP status codes</li>
    <li>All requests and responses need to have the right <code>Content-Type</code> header set so that the format of the messages are well understood by everyone.</li>
  </ol>
  <p>In the next tutorial, we’ll put these concepts into practice by implementing a RESTful API of our own. These are going to be tutorials on API design. We'll understand the principles behind good RESTful API design and start designing a RESTful API for
    the Messenger application</p>