import * as Location from "expo-location";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { point } from "@turf/helpers";
import destination from "@turf/destination";

export default class PsychiatristLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      south: null,
      west: null,
      north: null,
      east: null,
      latitude: 24.8607,
      longitude: 67.0011,
      reports: [
        {
          id: 1,
          lat: 24.8607,
          lon: 67.0611,
          title: "Therapy Works Karachi",
          description: "opposite Ameer Khusro Park",
          color: "blue",
        },
        {
          id: 2,
          lat: 24.8007,
          lon: 67.1111,
          title: "Consult A Psychologist",
          description: "1011, 10th Floor Park Avenue, Shahrah-e-Faisal",
          color: "green",
        },
        {
          id: 3,
          lat: 24.8307,
          lon: 67.0311,
          title: "Clinical Psychologist",
          description: "Neuromind Hospital Sardar Sabar Ali Road",
          color: "brown",
        },
        {
          id: 4,
          lat: 24.8307,
          lon: 67.0091,
          title: "Dr. Daniyal Riaz",
          description: "Mind Matters Clinic (Gulistan-e-Johar)",
          color: "red",
        },
        {
          id: 5,
          lat: 24.867,
          lon: 67.0200,
          title: "Dr. Daniyal Riaz",
          description: "The Modern Hospital (UniversityRoad)",
          color: "purple",
        },
        {
          id: 6,
          lat: 24.8617,
          lon: 67.0121,
          title: "Dr. Daniyal Riaz",
          description: "Al Wasay Medical Centre (Gulshan-e-Iqbal) (Gulshan-e-Iqbal) ",
          color: "black",
        },
      ],
    };
  }


  mapMarkers = () => {
    return this.state.reports.map((report) => <Marker
      key={report.id}
      coordinate={{ latitude: report.lat, longitude: report.lon }}
      pinColor={report.color}
    >
        <Callout>
        <View style={{height: 100, width: 200}}>
          <Text> {report.title} </Text>
          <Text> {report.description}</Text>
        </View>
        </Callout>
    </Marker >)
  }

  updateState(location) {
    this.setState({
      ...this.state,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  async componentDidMount() {
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.updateState(location);
    } catch (error) {
      console.log(error);
    }
  }

  onRegionChangeComplete = (region) => {
    const center = point([region.longitude, region.latitude]);
    const verticalMeter = (111 * region.latitudeDelta) / 2;
    const horizontalMeter = (111 * region.longitudeDelta) / 2;
    const options = { units: "kilometers" };
    const south = destination(center, verticalMeter, 180, options);
    const west = destination(center, horizontalMeter, -90, options);
    const north = destination(center, verticalMeter, 0, options);
    const east = destination(center, horizontalMeter, 90, options);
    this.setState({
      south: south.geometry.coordinates[1],
      west: west.geometry.coordinates[0],
      north: north.geometry.coordinates[1],
      east: east.geometry.coordinates[0],
    });
  };

  fetchToilet = async () => {
    const south = this.state.south;
    const west = this.state.west;
    const north = this.state.north;
    const east = this.state.east;
    const body = `
            [out:json];
            (
                node
                [amenity=kindergarten]
                (${south},${west},${north},${east});

            );
            out;
            `;

    const options = {
      method: "POST",
      body: body,
    };

    try {
      const response = await fetch(
        "https://overpass-api.de/api/interpreter",
        options
      );
      const json = await response.json();
      this.setState({ elements: json.elements });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.mapView}
          showsUserLocation
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          {this.mapMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  mapView: {
    ...StyleSheet.absoluteFillObject,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
    alignItems: "center",
  },

  button: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,235,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },

  buttonItem: {
    textAlign: "center",
  },
});
