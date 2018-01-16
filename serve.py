from bottle import route, run, template, static_file
import json

@route('/')
def index():
    return template("index.html.html")

@route('/js/<hanuqia:re:.*\.js>', method='GET')
def javascripts(hanuqia):
    return static_file(hanuqia, root='js')


@route('/css/<hanuqia:re:.*\.css>', method='GET')
def stylesheets(hanuqia):
    return static_file(hanuqia, root='css')

def main():
    run(host='localhost', port=7001)

if __name__ == '__main__':
    main()
