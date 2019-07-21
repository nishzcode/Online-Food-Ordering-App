from flask import Flask,render_template,request,flash,session
from flask_mysqldb import MySQL
from flask_cors import CORS,cross_origin
from flask import jsonify

app = Flask(__name__)
#app.secret_key = 'ezfood1234'

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'ezfood'

mysql = MySQL(app)

@app.route('/cusRegister',methods=['POST'])
@cross_origin(supports_credentials=True)
def cusRegister():
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
        return jsonify("success")

@app.route('/login',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def login():
    
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        uname = userDetails['username']
        pswd = userDetails['password']

        cur = mysql.connection.cursor()
        cur.execute("SELECT username ,password FROM user where username =%s AND password = %s",(uname,pswd))
        data= cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                return jsonify(data)
        else:
                return jsonify('error')
        
        

@app.route('/addCashier',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addCashier():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        utype = "cashier"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/mgrRegister',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def reqAdmin():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        shopname = userDetails['shopname']
        shopdesc = userDetails['shopdesc']
       # utype = "manager"

        cur = mysql.connection.cursor()
       # cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype))
        cur.execute("INSERT INTO requestdetails(firstname,lastname,email,mobileno,username,password,shopname,shopdesc) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,shopname,shopdesc))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addFood',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addFood():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        item = userDetails['itemname']
        itemdesc = userDetails['description']
        itemprice = userDetails['price']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO fooditem(itemname,description,price) VALUES(%s,%s,%s)",(item,itemdesc,itemprice))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addFood',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addRestaurant():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopname = userDetails['shopname']
        description = userDetails['description']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO shops(shopname,description) VALUES(%s,%s)",(shopname,description))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addOffer',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addOffer():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        offertitle = userDetails['title']
        offerdesc = userDetails['description']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO offers(title,description) VALUES(%s,%s)",(offertitle,offerdesc))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")


@app.route('/addToCart',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addToCart():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        item = userDetails['itemname']
        itemqty = userDetails['qty']
        itemprice = userDetails['unitprice']


        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO cart(itemname,qty,unitprice) VALUES(%s,%s,%s)",(item,itemqty,itemprice))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/placeOrder',methods=['POST'])
@cross_origin(supports_credentials=True)
def placeOrder():
    if request.method == 'POST':
        itemDetails = request.get_json(silent=True)
        items = itemDetails['items']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO orderdata(itemid) VALUES(%s)",[items])
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

    

@app.route('/viewRequests',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewRequests():
    if request.method == 'POST':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from requestdetails")
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/viewManagers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewManagers():
    if request.method == 'POST':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from user")
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/getFoodItems',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getFoodItems():
    if request.method == 'POST':
        #userDetails = request.get_json(silent=True)

        cur = mysql.connection.cursor()
        cur.execute("SELECT shopid,itemname, price, itempic FROM fooditem")
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

if __name__ == '__main__':
    app.run()