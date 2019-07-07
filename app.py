from flask import Flask,render_template,request
from flask_mysqldb import MySQL
from flask_cors import CORS,cross_origin

app = Flask(__name__)

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'ezfood'

mysql = MySQL(app)

@app.route('/cusregister',methods=['POST'])
@cross_origin(supports_credentials=True)
def custregister():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        utype = "customer"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype))
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
        cur.execute("SELECT username ,password FROM user where username==uname and password==pswd")
        mysql.connection.commit()
        cur.close()
        return " success"
    

@app.route('/',methods=['GET','POST'])
def viewRequests():
    if request.method == 'POST':
        userDetails = request.form

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from requestDetails")
        mysql.connection.commit()
        cur.close()
        return " success"

@app.route('/',methods=['GET','POST'])
def viewManagers():
    if request.method == 'POST':
        userDetails = request.form
        
        utype = "manager"

        cur = mysql.connection.cursor()
        cur.execute("SELECT firstname,lastname,mobileno,email,username from user where usertype== utype")
        mysql.connection.commit()
        cur.close()
        return " success"


if __name__ == '__main__':
    app.run()