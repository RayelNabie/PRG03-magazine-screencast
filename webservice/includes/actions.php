<?php
/**
 * @return array
 */
function getTechnologies(): array
{
    return [
        [
            "id" => 1,
            "name" => "PHP",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
        ],
        [
            "id" => 2,
            "name" => "JavaScript",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        ],
        [
            "id" => 3,
            "name" => "Python",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        ],
        [
            "id" => 4,
            "name" => "Java",
            "image" => "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
        ],
        [
            "id" => 5,
            "name" => "Laravel",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
        ],
        [
            "id" => 6,
            "name" => "Django",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
        ],
        [
            "id" => 7,
            "name" => "React",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        ],
        [
            "id" => 8,
            "name" => "Vue.js",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        ],
        [
            "id" => 9,
            "name" => "Angular",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
        ],
        [
            "id" => 10,
            "name" => "Spring Boot",
            "image" => "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
        ]
    ];
}

/**
 * @param $id
 * @return array|false
 */
function getTechnologyDetails($id): array|false
{
    $tags = [
        1 => [
            "side" => "Server",
            "framework" => false,
            "year" => 1995,
            "creator" => "Rasmus Lerdorf",
            "current_owner" => "The PHP Foundation",
            "rayel_score" => 3,
            "description" => "PHP is a widely-used server-side scripting language primarily used for web development. It powers popular CMS platforms such as WordPress, Joomla, and Drupal.",
            "website" => "https://www.php.net/",
            "tags" => ["backend", "web development", "CMS"]
        ],
        2 => [
            "side" => "Client",
            "framework" => false,
            "year" => 1995,
            "creator" => "Brendan Eich",
            "current_owner" => "Ecma International",
            "rayel_score" => 4,
            "description" => "JavaScript is the world's most widely used programming language, enabling dynamic and interactive web pages. It runs in web browsers and is also used for server-side applications through environments like Node.js.",
            "website" => "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "tags" => ["frontend", "interactive", "dynamic"]
        ],
        3 => [
            "side" => "Server",
            "framework" => false,
            "year" => 1991,
            "creator" => "Guido van Rossum",
            "current_owner" => "Python Software Foundation",
            "rayel_score" => 4,
            "description" => "Python is a powerful and beginner-friendly programming language known for its simplicity and versatility. It is widely used in web development, artificial intelligence, data science, and automation.",
            "website" => "https://www.python.org/",
            "tags" => ["AI", "data science", "automation"]
        ],
        4 => [
            "side" => "Server",
            "framework" => false,
            "year" => 1995,
            "creator" => "James Gosling",
            "current_owner" => "Oracle Corporation",
            "rayel_score" => 5,
            "description" => "Java is a versatile, object-oriented programming language commonly used in enterprise applications, Android development, and cloud computing.",
            "website" => "https://www.java.com/",
            "tags" => ["enterprise", "Android", "cloud computing"]
        ],
        5 => [
            "side" => "Server",
            "framework" => true,
            "year" => 2011,
            "creator" => "Taylor Otwell",
            "current_owner" => "Laravel LLC",
            "rayel_score" => 4,
            "description" => "Laravel is a modern PHP framework that simplifies web application development with built-in features like routing, authentication, and database management through Eloquent ORM.",
            "website" => "https://laravel.com/",
            "tags" => ["MVC", "backend", "PHP framework"]
        ],
        6 => [
            "side" => "Server",
            "framework" => true,
            "year" => 2005,
            "creator" => "Django Software Foundation",
            "current_owner" => "Django Software Foundation",
            "rayel_score" => 2,
            "description" => "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It comes with built-in security features, ORM support, and is widely used for scalable web applications.",
            "website" => "https://www.djangoproject.com/",
            "tags" => ["Python", "web framework", "scalability"]
        ],
        7 => [
            "side" => "Client",
            "framework" => true,
            "year" => 2013,
            "creator" => "Facebook (Meta)",
            "current_owner" => "Meta (Facebook)",
            "rayel_score" => 5,
            "description" => "React is a popular JavaScript library for building user interfaces. It utilizes a component-based architecture and a Virtual DOM for efficient rendering.",
            "website" => "https://reactjs.org/",
            "tags" => ["UI", "JavaScript library", "Virtual DOM"]
        ],
        8 => [
            "side" => "Client",
            "framework" => true,
            "year" => 2014,
            "creator" => "Evan You",
            "current_owner" => "Vue.js Community",
            "rayel_score" => 5,
            "description" => "Vue.js is a progressive JavaScript framework designed for building interactive user interfaces. It is easy to learn, lightweight, and can be integrated into existing projects with minimal setup.",
            "website" => "https://vuejs.org/",
            "tags" => [
                "frontend",
                "lightweight",
                "progressive"
            ]
        ],
        9 => [
            "side" => "Client",
            "framework" => true,
            "year" => 2010,
            "creator" => "Google",
            "current_owner" => "Google",
            "rayel_score" => 3,
            "description" => "Angular is a TypeScript-based front-end framework developed by Google for building dynamic and scalable web applications.",
            "website" => "https://angular.io/",
            "tags" => ["TypeScript", "Google", "SPA"]
        ],
        10 => [
            "side" => "Server",
            "framework" => true,
            "year" => 2014,
            "creator" => "Pivotal Software",
            "current_owner" => "VMware",
            "rayel_score" => 5,
            "description" => "Spring Boot is a Java-based framework that simplifies the development of microservices and enterprise applications.",
            "website" => "https://spring.io/projects/spring-boot",
            "tags" => ["Java", "microservices", "enterprise"]
        ],
    ];

    return $tags[$id] ?? false;
}