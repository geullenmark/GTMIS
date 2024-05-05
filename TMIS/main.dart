// import library
import 'package:flutter/material.dart';
import 'search_screen.dart'; // Import the SearchScreen widget

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: NotificationScreen(),
    );
  }
}

class NotificationScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Text('NOTIFICATIONS'),
        actions: [
          IconButton(
            icon: Icon(Icons.person, color: Colors.teal),
            onPressed: () {},
          ),
        ],
        backgroundColor: Colors.teal,
      ),
      body: Column(
        children: <Widget>[
          Container(
            color: Colors.teal,
            child: Center(
              child: Text(
                'G360',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24.0,
                ),
              ),
            ),
          ),
          DefaultTabController(
            length: 2,
            child: Column(
              children: <Widget>[
                TabBar(
                  tabs: [
                    Tab(text: 'NEW'),
                    Tab(text: 'ALL'),
                  ],
                ),
                Container(
                  height: 300, // Adjust the height as needed
                  child: TabBarView(
                    children: [
                      _buildNotificationList(),
                      _buildNotificationList(),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home, color: Colors.teal),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications, color: Colors.teal), // Teal color
            label: 'Notification',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search, color: Colors.teal), // Teal color
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person, color: Colors.teal), // Teal color
            label: 'Profile',
          ),
        ],
        selectedItemColor: Colors.teal,
        onTap: (int index) {
          if (index == 2) {
            // Navigate to SearchScreen when Search icon is tapped
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SearchScreen()),
            );
          }
        },
      ),
    );
  }

  Widget _buildNotificationList() {
    return ListView.builder(
      itemCount: 4,
      itemBuilder: (BuildContext context, int index) {
        return Card(
          child: ListTile(
            title: Text('Your requested documents are available for pickup.'),
          ),
        );
      },
    );
  }
}
