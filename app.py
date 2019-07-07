from flask import Flask,render_template,request
from flask_mysqldb import MySQL


app = Flask(__name__)

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'foodapp'

mysql = MySQL(app)

@app.route('/',methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        userDetails = request.get_json()
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd))
        mysql.connection.commit()
        cur.close()
        return " success"

@app.route('/',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        userDetails = request.form
        uname = userDetails['username']
        pswd = userDetails['password']

        cur = mysql.connection.cursor()
        cur.execute("SELECT username ,password FROM user where username==uname")
        mysql.connection.commit()
        cur.close()
        return " success"
    

if __name__ == '__main__':
    app.run()