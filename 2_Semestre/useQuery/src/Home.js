import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { queryClient } from "../App";
 
export default function Home() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
 
  // async function pegarUsuarios() {
  //   try {
  //     setLoading(true);
 
  //     await new Promise(resolve => setTimeout(resolve, 3000));
 
  //     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     setUsers(response.data);
 
  //   } catch (error) {
  //     setError(error);
  //     // console.error("Erro na chamada", error)
  //   } finally {
  //     setLoading(false);
  //   }
  // }
 
  // useEffect(() => {
  //   pegarUsuarios()
  // }, []);
 
  const [step, setStep] = useState("listUsers");
 
 
  const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  }
 
  const fetchPosts = async () => {
    console.log("====> fetchPosts")
    console.log("Fazendo o fetch")
    console.log("====> fetchPosts")
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  }
 
  const registerUser = async () => {
    console.log("Executando a query")
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
 
    console.log(response.data);
 
    return response.data;
  }
 
  const {
    mutate,
    isPending,
    isError: mutateError
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      // alert("preenchido!")
      queryClient.invalidateQueries(['posts'])
    }
  })
 
  const { data: users, error, isLoading, isError, } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });
 
  const {
    data: posts,
    error: postsError,
    isLoading: postIsLoading,
    isError: postsIsError,
    isRefetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
 
  if (isLoading) {
    return (
<ActivityIndicator size="large" color="#f0c" />
    )
  }
 
  if (isError) {
    return (
<Text>
        {JSON.stringify(error, null, 2)}
</Text>
    )
  }
  if (isRefetching) {
    return (
<Text>
        Recarregando os dados.
</Text>
    )
  }
 
 
  return (
<SafeAreaView style={{ flex: 1 }}>
<View style={styles.container}>
<StatusBar style="light" />
        {
          step === "listUsers" && (<FlatList
            data={users}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => (
<View style={{
                backgroundColor: "#f7f7e9ff",
                padding: 10,
                borderRadius: 10
              }}>
<Text>{item?.name}</Text>
<Text>{item?.username}</Text>
<Text>{item?.email}</Text>
                {/* <Text>{JSON.stringify(item, null, 2)}</Text> */}
</View>
            )}
            showsVerticalScrollIndicator={false}
          />)
 
 
        }
 
        {
          step === "listPosts" && (
<FlatList
              data={posts}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              renderItem={({ item }) => (
<View style={{
                  backgroundColor: "#f7f7e9ff",
                  padding: 10,
                  borderRadius: 10
                }}>
<Text>{JSON.stringify(item, null, 2)}</Text>
                  {/* <Text>{JSON.stringify(item, null, 2)}</Text> */}
</View>
              )}
              showsVerticalScrollIndicator={false}
            />
          )
        }
 
        {
          step === "createPost" && (
<View
              style={{
                flex: 1,
                background: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 15
              }}
>
<TextInput placeholder="teste"
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  width: 200
                }}
                value="Titulo de teste"
              />
<TextInput placeholder="teste"
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  width: 200
                }}
                value="Body de teste"
              />
              {/* <TextInput placeholder="teste"
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  width: 200
                }}
              /> */}
<TextInput placeholder="teste"
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  width: 200
                }}
                value="1"
              />
 
              <TouchableOpacity
                onPress={mutate}
>
<Text>Submit</Text>
</TouchableOpacity>
 
              {isPending && <ActivityIndicator size="large" color="#f0c" />}
</View>
          )
 
        }
 
        <View style={{
          position: 'absolute',
          bottom: 0,
          background: '#f0c'
        }}>
<TouchableOpacity
            style={{
              backgroundColor: "#f0c",
              padding: 10,
              borderRadius: 10
            }}
            onPress={() => setStep("listUsers")}
>
<Text
              style={{
                color: "#fff",
                fontSize: 20
              }}
>Usuarios</Text>
</TouchableOpacity>
 
          <TouchableOpacity
            style={{
              backgroundColor: "#f0c",
              padding: 10,
              borderRadius: 10
            }}
            onPress={() => setStep("listPosts")}
>
<Text
              style={{
                color: "#fff",
                fontSize: 20
              }}
>
              Posts
</Text>
</TouchableOpacity>
 
          <TouchableOpacity
            style={{
              backgroundColor: "#f0c",
              padding: 10,
              borderRadius: 10
            }}
            onPress={() => setStep("createPost")}
>
<Text style={{ color: "#fff", fontSize: 20 }}>Cadastrar Post</Text>
</TouchableOpacity>
</View>
</View>
</SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});