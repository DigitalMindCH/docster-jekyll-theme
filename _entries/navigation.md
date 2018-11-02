---
sectionclass: h2
sectionid: navigation
parent-id: content
number: 3200
title: Navigation
---
The navigation is dynamic, so you don't have to manually add every page.

In this section I'll just quickly plop in the code, in case you would like to have the fourth level displayed as well.

**default 3-level:**

{% highlight html %}
{% raw %}
<ul id="nav">
    {% assign level-1 = site.entries | where: "sectionclass", "h1" | sort: "number"%}
    {% for entry in level-1 %}
    {% assign level-2 = site.entries | where: "parent-id", entry.sectionid | sort: "number" %}
    <li {% if level-2.first!=null or forloop.first %} class="{% if level-2.first!=null %}parent{% endif %}{% if forloop.first %} current{% endif %}" {% endif %}>
        <a {% if level-2.first= =null %}class="children" {% endif %} href="#{{ entry.sectionid }}">{{ entry.title }}</a>
        {% if level-2.first!=null %}
        <ul style="display: none;">
            {% for child in level-2 %}
            {% assign level-3 = site.entries | where: "parent-id", child.sectionid | sort: "number" %}
            <li {% if level-3.first!=null %}class="parent" {% endif %}>
                <a {% if level-3.first= =null %}class="children" {% endif %} href="#{{ child.sectionid }}">{{ child.title }}</a>
                {% if level-3.first!=null %}
                <ul style="display: none;">
                    {% for grandchild in level-3 %}
                    <li>
                        <a href="#{{ grandchild.sectionid }}">{{ grandchild.title }}</a>
                    </li>
                    {% endfor %}
                </ul>
                {% endif %}
            </li>
            {% endfor %}
        </ul>
        {% endif %}
    </li>
    {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}
